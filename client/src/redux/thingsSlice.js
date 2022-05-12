import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchThings = createAsyncThunk(
  "things/getAllThings",
  async (url) => {
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
  },
});

export default thingsSlice.reducer;
