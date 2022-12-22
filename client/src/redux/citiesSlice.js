import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api/cities";

export const fetchCities = createAsyncThunk("cities/getAllCities", () => {
  return API.fetchCities();
});

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCities.fulfilled]: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export default citiesSlice.reducer;
