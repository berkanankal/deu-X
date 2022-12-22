import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api/notes";

export const fetchNotes = createAsyncThunk("notes/getAllNotes", (url) => {
  return API.fetchNotes(url);
});

export const fetchNoteById = createAsyncThunk(
  "notes/getNoteById",
  async (id) => {
    return API.fetchNoteById(id);
  }
);

export const addNote = createAsyncThunk("notes/addNote", async (data) => {
  return API.addNote(data);
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
