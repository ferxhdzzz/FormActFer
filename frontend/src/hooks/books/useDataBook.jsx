import { useEffect } from "react";
import { url } from "../../utils/apiUri"; // URL de la API
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchBook from "./useFetchBook";
 
const useDataBook = (methods) => {
  const { getBookById, getBooks } = useFetchBook();
  const { id } = useParams();
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
 
  const navigate = useNavigate();
 
  // save user form
  // funcion para guardar el formulario de usuario y enviar los datos a la API
  const saveBookForm = async (dataForm) => {
    try {
      // enviar la solicitud POST a la API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to add book");
        throw new Error("Failed to add book");
      }
      toast.success("book saved successfully");
      navigate("/home"); // Redirigir a la página de inicio después de guardar
    } catch (error) {
      console.log("Error al  enviado:", error);
    } finally {
      reset(); // reiniciar el formulario después de enviar
      getBooks(); // obtener la lista actualizada de usuarios
    }
  };
 
  // Función para editar un usuario
  // Esta función se llama cuando se envía el formulario de edición
  // y envía una solicitud PUT a la API para actualizar los datos del usuario
 
  const editBook = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to update user");
        throw new Error("Failed to update user");
      }
      toast.success("User updated successfully");
      navigate("/home"); // Redirect to home after updating
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    } finally {
      reset(); // Reset the form after submission
      getBooks(); // Refresh the user list after updating
    }
  };
 
  // Esta función se llama cuando se envía el formulario
  // y decide si guardar un nuevo usuario o editar uno existente
  // dependiendo de si hay un id presente en los parámetros de la URL
  // Si hay un id, se llama a editUser, de lo contrario se llama a saveUserForm
 
  const handleUserAction = (dataForm) => {
    if (id) {
        editBook(dataForm);
    } else {
        saveBookForm(dataForm);
    }
  };
 
  // Función para manejar la actualización de un usuario
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición del usuario
  // pasando el id del usuario como parámetro en la URL
  const handleUpdateBook = (id) => {
    navigate(`/users/${id}`);
  };
 
  // Cargar los datos del usuario por id
  // Esta función se llama para obtener los datos del usuario cuando el componente se monta o cuando cambia el id
  const loadBook = async () => {
    if (id) {
      const user = await getBookById(id);
      if (user) {
        reset({
          nombre: user?.nombre,
          apellido: user?.apellido,
          correo: user?.correo,
          especialidad: user?.especialidad,
        });
      }
    }
  };
 
  // useEffect para cargar los datos del usuario cuando el componente se monta o cuando cambia el id
  useEffect(() => {
    loadBook();
  }, [id]); // Dependencia en id para recargar los datos si cambia
 
  return {
    register,
    handleSubmit: handleSubmit(handleUserAction),
    errors,
    getBookById,
    handleUpdateBook,
    loadBook,
  };
};
 
export default useDataBook;