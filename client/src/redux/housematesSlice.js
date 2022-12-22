import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api/housemates";

export const fetchHousemates = createAsyncThunk(
  "housemates/getAllHousemates ",
  (url) => {
    return API.fetchHousemates(url);
  }
);

export const fetchHousemateById = createAsyncThunk(
  "housemates/getHousemateById",
  (id) => {
    return API.fetchHousemateById(id);
  }
);

export const addHousemate = createAsyncThunk(
  "housemates/addHousemate",
  (data) => {
    return API.addHousemate(data);
  }
);

export const housematesSlice = createSlice({
  name: "housemates",
  initialState: {
    housemates: {
      data: [],
      status: "idle",
      error: null,
    },
    housemate: {
      data: {},
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    // Fetch Housemates
    [fetchHousemates.pending]: (state) => {
      state.housemates.status = "loading";
    },
    [fetchHousemates.fulfilled]: (state, action) => {
      state.housemates.data = action.payload;
      state.housemates.status = "succeeded";
    },
    [fetchHousemates.rejected]: (state, action) => {
      state.housemates.status = "failed";
      state.housemates.error = action.error.message;
    },
    // Fetch Housemate By Id
    [fetchHousemateById.pending]: (state) => {
      state.housemate.status = "loading";
    },
    [fetchHousemateById.fulfilled]: (state, action) => {
      state.housemate.data = action.payload;
      state.housemate.status = "succeeded";
    },
    [fetchHousemateById.rejected]: (state, action) => {
      state.housemate.status = "failed";
      state.housemate.error = action.error.message;
    },
    // Add Housemate
    [addHousemate.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.housemates.data.push(action.payload);
    },
  },
});

export default housematesSlice.reducer;
