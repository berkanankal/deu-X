import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchThingCategories = createAsyncThunk(
  "thingCategories/getAllThingCategories",
  async () => {
    const res = await axios.get("http://localhost:5000/api/thingCategory");
    return res.data.data;
  }
);

export const thingCategoriesSlice = createSlice({
  name: "thingCategories",
  initialState: {
    thingCategories: [],
  },
  reducers: {},
  extraReducers: {
    [fetchThingCategories.fulfilled]: (state, action) => {
      state.thingCategories = action.payload;
    },
  },
});

export default thingCategoriesSlice.reducer;
