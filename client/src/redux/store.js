import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import authReducer from "./authSlice";
import notesReducer from "./notesSlice";
import booksReducer from "./booksSlice";
import thingsReducer from "./thingsSlice";
import thingCategoriesReducer from "./thingCategoriesSlice";
import housematesReducer from "./housematesSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    auth: authReducer,
    notes: notesReducer,
    books: booksReducer,
    things: thingsReducer,
    thingCategories: thingCategoriesReducer,
    housemates: housematesReducer,
  },
});
