import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/getAllBooks", async (url) => {
  const res = await axios.get(url);
  return res.data.data;
});

export const fetchBookById = createAsyncThunk(
  "books/getBookById",
  async (id) => {
    const url = `http://localhost:5000/api/book/${id}`;
    const res = await axios.get(url);
    return res.data.data;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: {
      data: [],
      loading: false,
      error: null,
    },
    book: {
      data: {},
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchBookById.pending]: (state) => {
      state.book.status = "loading";
    },
    [fetchBookById.fulfilled]: (state, action) => {
      state.book.data = action.payload;
      state.book.status = "succeeded";
    },
    [fetchBookById.rejected]: (state, action) => {
      state.book.status = "failed";
      state.book.error = action.error.message;
    },
  },
});

export default booksSlice.reducer;
