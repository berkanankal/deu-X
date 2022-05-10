import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import authReducer from "./authSlice";
import notesReducer from "./notesSlice";
import booksReducer from "./booksSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    auth: authReducer,
    notes: notesReducer,
    books: booksReducer,
  },
});
