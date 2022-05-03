import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    auth: authReducer,
  },
});
