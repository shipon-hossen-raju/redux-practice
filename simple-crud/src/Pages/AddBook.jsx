import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../Fetaure/Books/BooksSlice";

const AddBook = () => {
   const bookReducer = useSelector((state) => state.booksReducer);
   console.log(bookReducer)

   const [bookTitle, setTitle ] = useState(null)
   const [bookAuthor, setAuthor] = useState(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const handleSubmit = (e) => {
      e.preventDefault()
      const book = { id: bookReducer.length + 1, title: bookTitle, author: bookAuthor };
      console.log(book);
      dispatch(addBooks(book));
      navigate('/show-books')
   }

   return (
      <div className="flex justify-center items-center h-[90vh]">
         <form onSubmit={handleSubmit} className="max-w-md text-center border border-slate-400 bg-slate-100 p-4 flex flex-col gap-2">
            <div>
               <label htmlFor="title">Book Name: </label>
               <input className="border border-gray-200 p-1" type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
               <label htmlFor="author">Book Author: </label>
               <input className="border border-gray-200 p-1" type="text" id="author" name="author" onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <input className="py-1 px-2 cursor-pointer bg-blue-500 hover:bg-blue-600" type="submit" value="Add Book" />
         </form>
      </div>
   );
};

export default AddBook;