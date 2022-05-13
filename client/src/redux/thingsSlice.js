import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchThings = createAsyncThunk(
  "things/getAllThings",
  async (url) => {
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const fetchThingById = createAsyncThunk(
  "things/getThingById",
  async (id) => {
    const url = `http://localhost:5000/api/thing/${id}`;
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const thingsSlice = createSlice({
  name: "things",
  initialState: {
    things: [],
    loading: false,
    error: null,
    thing: {
      data: {},
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchThings.pending]: (state) => {
      state.loading = true;
    },
    [fetchThings.fulfilled]: (state, action) => {
      state.things = action.payload;
      state.loading = false;
    },
    [fetchThings.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchThingById.pending]: (state) => {
      state.thing.status = "loading";
    },
    [fetchThingById.fulfilled]: (state, action) => {
      state.thing.data = action.payload;
      state.thing.status = "succeeded";
    },
    [fetchThingById.rejected]: (state, action) => {
      state.thing.status = "failed";
      state.thing.error = action.error.message;
    },
  },
});

export default thingsSlice.reducer;
