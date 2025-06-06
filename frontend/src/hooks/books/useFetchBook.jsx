import {toast} from "react-hot-toast"
import {url} from "../../utils/apiUri"
import {useEffect, useState} from "react"




const useFecthUsers =()=>{

   const [books, setUsers] = useState([])

   const getBooks = async () => {
       try {
           const response = await fetch(url)
           if (!response.ok) {
               throw new Error("Error fetching books")
               
           }
           const data = await response.json()
           setUsers(data)
       } catch (error) {
           console.error("error fetching books", error)
          toast.error("error fetching books")

       }
   }



//funcion para obtener un usuario por su id
 //se usa async/await para manejar la asincronía de la llamada a la API

 const getBookById = async (id) => {
   try {
     const response = await fetch(`${url}/${id}`);
     if (!response.ok) {
       console.log("Failed to fetch user");
       throw new Error("Failed to fetch book");
     }
     const data = await response.json();
     return data;
   } catch (error) {
     console.error("Error fetching book:", error);
     console.log("Failed to fetch book");
     return null;
   }
 };

   useEffect(() => {
    getBooks()
   }, [])


return {
    books, 
   getBookById,
   getBooks
}




}

export default useFecthUsers