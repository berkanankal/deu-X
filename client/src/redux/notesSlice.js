import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = createAsyncThunk("notes/getAllNotes", async (url) => {
  const res = await axios.get(url);
  return res.data.data;
});

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchNotes.pending]: (state) => {
      state.loading = true;
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    },
    [fetchNotes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default notesSlice.reducer;
