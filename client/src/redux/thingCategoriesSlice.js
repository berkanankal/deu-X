import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api/thingCategories";

export const fetchThingCategories = createAsyncThunk(
  "thingCategories/getAllThingCategories",
  () => {
    return API.fetchThingCategories();
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
