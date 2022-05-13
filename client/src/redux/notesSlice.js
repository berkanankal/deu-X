import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = createAsyncThunk("notes/getAllNotes", async (url) => {
  const res = await axios.get(url);
  return res.data.data;
});

export const fetchNoteById = createAsyncThunk(
  "notes/getNoteById",
  async (id) => {
    const url = `http://localhost:5000/api/note/${id}`;
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: {
      data: [],
      loading: false,
      error: null,
    },
    note: {
      data: {},
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchNotes.pending]: (state) => {
      state.notes.loading = true;
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes.data = action.payload;
      state.notes.loading = false;
    },
    [fetchNotes.rejected]: (state, action) => {
      state.notes.loading = false;
      state.notes.error = action.error.message;
    },
    [fetchNoteById.pending]: (state) => {
      state.note.status = "loading";
    },
    [fetchNoteById.fulfilled]: (state, action) => {
      state.note.data = action.payload;
      state.note.status = "succeeded";
    },
    [fetchNoteById.rejected]: (state, action) => {
      state.note.status = "failed";
      state.note.error = action.error.message;
    },
  },
});

export default notesSlice.reducer;
