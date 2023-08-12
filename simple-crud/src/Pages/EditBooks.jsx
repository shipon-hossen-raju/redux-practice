import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBooks } from "../Fetaure/Books/BooksSlice";

const EditBooks = () => {
   const { state } = useLocation();
   console.log(state);

   const [title, setTitle] = useState(state.title);
   const [author, setAuthor] = useState(state.author);
   const dispatch = useDispatch();
   const navigate = useNavigate()


   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(updateBooks({ id: state.id, title, author }));
      navigate("/show-books", {replace: true});
   }

   return (
     <div className="flex justify-center items-center h-[90vh]">
       <form
         onSubmit={handleSubmit}
         className="max-w-md text-center border border-slate-400 bg-slate-100 p-4 flex flex-col gap-2"
       >
         <div>
           <label htmlFor="title">Book Name: </label>
           <input
             className="border border-gray-200 p-1"
             type="text"
             id="title"
             name="title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
           />
         </div>

         <div>
           <label htmlFor="author">Book Author: </label>
           <input
             className="border border-gray-200 p-1"
             type="text"
             id="author"
             name="author"
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
           />
         </div>

         <input
           className="py-1 px-2 cursor-pointer bg-blue-500 hover:bg-blue-600"
           type="submit"
           value="Add Book"
         />
       </form>
     </div>
   );
};

export default EditBooks;