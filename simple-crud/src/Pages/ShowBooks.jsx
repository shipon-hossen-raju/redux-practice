import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBooks } from "../Fetaure/Books/BooksSlice";

const ShowBooks = () => {
  const books = useSelector((state) => state?.booksReducer);
  console.log(books);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteBooks(id))
  }

   return (
     <div className="container mx-auto">
       <div className="flex flex-col">
         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
           <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
             <div className="overflow-hidden">
               <table className="min-w-full text-left text-sm font-light">
                 <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-200">
                   <tr>
                     <th scope="col" className="px-6 py-4">
                      ID
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Title
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Author
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Action
                     </th>
                   </tr>
                 </thead>
                 <tbody>
                   { books && books.map((book, i) => {
                     const { id, title, author } = book;

                     return (
                       <tr
                         className={`border-b dark:border-neutral-500 ${
                           i % 2 == 0
                             ? " bg-neutral-100 dark:bg-neutral-300"
                             : " bg-white  dark:bg-neutral-200"
                         }`}
                         key={id}
                       >
                         <td className="px-6 py-4 whitespace-nowrap">{i+1}</td>
                         <td className="px-6 py-4 whitespace-nowrap">
                           {title}
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap">
                           {author}
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                           <Link
                             to={`/edit-book`}
                             state={{ id, title, author }}
                             className="text-indigo-600 hover:text-indigo-900"
                           >
                             Edit
                           </Link>
                           <button
                             onClick={() => handleDelete(id)}
                             className="ml-2 text-indigo-600 hover:text-indigo-900"
                           >
                             Delete
                           </button>
                         </td>
                       </tr>
                     );
                   })
                     
                   }
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default ShowBooks;