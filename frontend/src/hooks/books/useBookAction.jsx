import { url } from "../../utils/apiUri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
const useBookAction = (getBooks) => {
  const navigate = useNavigate();
 
  //funcion para eliminar un usuario por su id
  // se usa async/await para manejar la asincronía de la llamada a la API
  const deleteBooks = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("book deleted successfully");
      console.log("book deleted:", response);
      getBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book");
    } finally {
        getBooks();
    }
  };
 
  // Función para manejar la actualización de un usuario
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición del usuario
  // pasando el id del usuario como parámetro en la URL
  const handleUpdateBook = (id) => {
    navigate(`/books/${id}`);
  };
 
  return {
    deleteBooks,
    handleUpdateBook,
  };
};
 
export default useBookAction;