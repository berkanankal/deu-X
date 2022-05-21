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

export const addNote = createAsyncThunk("notes/addNote", async (data) => {
  const url = `http://localhost:5000/api/note`;
  const res = await axios.post(url, data);
  return res.data.data;
});

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: {
      data: [],
      status: "idle",
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
    // Fetch Notes
    [fetchNotes.pending]: (state) => {
      state.notes.status = "loading";
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.notes.data = action.payload;
      state.notes.status = "succeeded";
    },
    [fetchNotes.rejected]: (state, action) => {
      state.notes.status = "failed";
      state.notes.error = action.error.message;
    },
    // Fetch Note By Id
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
    // Add Note
    [addNote.fulfilled]: (state, action) => {
      state.notes.data.push(action.payload);
    },
  },
});

export default notesSlice.reducer;
