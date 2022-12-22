import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api/things";

export const fetchThings = createAsyncThunk("things/getAllThings", (url) => {
  return API.fetchThings(url);
});

export const fetchThingById = createAsyncThunk("things/getThingById", (id) => {
  return API.fetchThingById(id);
});

export const addThing = createAsyncThunk("things/addThing", (newThing) => {
  return API.addThing(newThing);
});

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
