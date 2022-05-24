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

export const addThing = createAsyncThunk(
  "things/addThing",
  async (newThing) => {
    const url = `http://localhost:5000/api/thing`;
    const res = await axios.post(url, newThing);
    return res.data.data;
  }
);

export const thingsSlice = createSlice({
  name: "things",
  initialState: {
    things: {
      data: [],
      status: "idle",
      error: null,
    },
    thing: {
      data: {},
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    // Fetch Things
    [fetchThings.pending]: (state) => {
      state.things.status = "loading";
    },
    [fetchThings.fulfilled]: (state, action) => {
      state.things.data = action.payload;
      state.things.status = "succeeded";
    },
    [fetchThings.rejected]: (state, action) => {
      state.things.status = "failed";
      state.things.error = action.error.message;
    },
    // Fetch Thing By Id
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
    // Add Thing
    [addThing.fulfilled]: (state, action) => {
      state.things.data.push(action.payload);
    },
  },
});

export default thingsSlice.reducer;
