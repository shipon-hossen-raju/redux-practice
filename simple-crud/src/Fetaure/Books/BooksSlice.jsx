import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
      {
         id: 1,
         title: "Love Bangladesh",
         author: "Anisul Islam",
      },
      {
         id: 2,
         title: "Bangladeshi",
         author: "Shipon Hossen Raju",
      }
   ]

const BooksSlice = createSlice({
   name: "books",
   initialState: initialBooks,
   reducers: {
      showBooks: (state) => state,
      addBooks: (state, action) => [...state, action.payload],
      updateBooks: (state, action) => {
         const index = state.findIndex((book) => book.id === action.payload.id);
         state[index] = action.payload
      },
      deleteBooks: (state, action) => {
         return state.filter((book) => book.id !== action.payload);
      }
   }
})

export const { showBooks, addBooks, deleteBooks, updateBooks } = BooksSlice.actions;
export default BooksSlice.reducer