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

export const housematesSlice = createSlice({
  name: "housemates",
  initialState: {
    housemates: {
      data: [],
      loading: false,
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
    [fetchHousemates.pending]: (state) => {
      state.housemates.loading = true;
    },
    [fetchHousemates.fulfilled]: (state, action) => {
      state.housemates.data = action.payload;
      state.housemates.loading = false;
    },
    [fetchHousemates.rejected]: (state, action) => {
      state.housemates.loading = false;
      state.housemates.error = action.error.message;
    },
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
  },
});

export default housematesSlice.reducer;
