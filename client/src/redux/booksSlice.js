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

export const addBook = createAsyncThunk("books/addBook", async (data) => {
  const url = `http://localhost:5000/api/book`;
  const res = await axios.post(url, data);
  return res.data.data;
});

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: {
      data: [],
      status: "idle",
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
    // Fetch Books
    [fetchBooks.pending]: (state) => {
      state.books.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books.data = action.payload;
      state.books.status = "succeeded";
    },
    [fetchBooks.rejected]: (state, action) => {
      state.books.status = "failed";
      state.books.error = action.error.message;
    },
    // Fetch Book By Id
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
    // Add Book
    [addBook.fulfilled]: (state, action) => {
      state.books.data.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
