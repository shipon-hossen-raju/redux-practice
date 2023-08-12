import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../Books/BooksSlice";

const store = configureStore({
   reducer: {
      booksReducer: BooksSlice,
   }
})

export default store