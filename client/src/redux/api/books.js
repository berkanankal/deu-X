import API from "./index";

export const fetchBooks = async (url) => {
  const res = await API.get(url);
  return res.data.data;
};

export const fetchBookById = async (id) => {
  const res = await API.get(`/book/${id}`);
  return res.data.data;
};

export const addBook = async (data) => {
  const res = await API.post("/book", data);
  return res.data.data;
};
