import API from "./index";

export const fetchThings = async (url) => {
  const res = await API.get(url);
  return res.data.data;
};

export const fetchThingById = async (id) => {
  const res = await API.get(`/thing/${id}`);
  return res.data.data;
};

export const addThing = async (data) => {
  const res = await API.post("/thing", data);
  return res.data.data;
};
