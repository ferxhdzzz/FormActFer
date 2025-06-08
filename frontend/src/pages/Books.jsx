import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import {optionSelect} from '../utils/apiUri';
import useDataBook from '../hooks/books/useDataBook';
import { useParams } from "react-router-dom";
import {useForm} from "react-hook-form";
import "./Books.css";
 
const Books = () => {
 
  const { id } = useParams();
  const methods = useForm();
  const {register, handleSubmit, errors}= useDataBook(methods);
 
  return (
    <div className="book-container">
      <Link
        to="/home"
        className="linkk"
      >
        Back To Dashboard
      </Link>
      <form
      onSubmit={handleSubmit}
      className="nc">
        <Titulo titulo="Book Information" />
 
        <p className="pbro">
         administra los libros de manera efectiva
        </p>
 
        <div className="input-container">
          
 
          <InputText
            type="text"
            name="stock"
            label="Stock"
            placeholder="Stock"
            register={register}
            errors={errors}
          />
 
       
          <InputText
            type="text"
            name="precio"
            label="Precio"
            placeholder="Enter price"
            register={register}
            errors={errors}
          />
 
          
          <InputText
            type="text"
            name="producto"
            label="Titulo"
            placeholder="Enter the tittle"
            register={register}
            errors={errors}
          />
 
          <SelectInput
            label="Categoria"
            options={optionSelect}
            name="categoria"
            register={register}
            errors={errors}
          />
        </div>
        <Button type="submit" text="Save Book"className="button"/>
      </form>
    </div>
  );
};
 
export default Books;