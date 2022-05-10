import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCities = createAsyncThunk("cities/getAllCities", async () => {
  const res = await axios.get("http://localhost:5000/api/city");
  return res.data.data;
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
