import API from "./index";

export const fetchNotes = async (url) => {
  const res = await API.get(url);
  return res.data.data;
};

export const fetchNoteById = async (id) => {
  const res = await API.get(`/note/${id}`);
  return res.data.data;
};

export const addNote = async (data) => {
  const res = await API.post("/note", data);
  return res.data.data;
};
