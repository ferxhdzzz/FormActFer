import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFecthBooks from "../hooks/books/useFetchBook";
import { optionSelect } from "../utils/apiUri";
import useBookAction from "../hooks/books/useBookAction";
import { use } from "react";
import "./Home.css";



const Home = () => {

  const {books, getBooks} = useFecthBooks()
  const {deleteBooks, handleUpdateBook} = useBookAction(getBooks)

 return (
  <div className="home-wrapper">
    <div className="home-container">
        <Link
        to="/dash"
        className="linkk"
      >
        Volver
      </Link>
      <Link to="/books" className="div-container">
        Agregar libro
      </Link>

      <Titulo titulo="Book Information" />
      <p className="ppp">Lista de libros registrados.</p>

      <div className="seccion">
        <table className="seccion-q">
          <thead className="thead-sec">
            <tr>
              <th className="sec">Stock</th>
              <th className="sec">Precio</th>
              <th className="sec">Producto</th>
              <th className="sec">Categoria</th>
              <th className="sec">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <tr key={book?.id} className="homee">
                <td className="tt-home">{book.stock}</td>
                <td className="tt-home">{book.precio}</td>
                <td className="tt-home">{book.producto}</td>
                <td className="tt-home">
                  {
                    optionSelect.find((opt) => opt.value === book.categoria)
                      ?.label || "sin asignar"
                  }
                </td>
                <td className="botones-home">
                  <Button
                    text="Editar"
                    className="button"
                    onClick={() => handleUpdateBook(book.id)}
                  />
                  <ButtonDelete
                    text="Eliminar"
                    className="button"
                    onClick={() => deleteBooks(book.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default Home;
