import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHousemates = createAsyncThunk(
  "housemates/getAllHousemates ",
  async (url) => {
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const fetchHousemateById = createAsyncThunk(
  "housemates/getHousemateById",
  async (id) => {
    const url = `http://localhost:5000/api/housemate/${id}`;
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const addHousemate = createAsyncThunk(
  "housemates/addHousemate",
  async (data) => {
    const url = `http://localhost:5000/api/housemate`;
    const res = await axios.post(url, data);
    return res.data.data;
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
      state.housemates.data.push(action.payload);
    },
  },
});

export default housematesSlice.reducer;
