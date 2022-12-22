import API from "./index";

export const fetchHousemates = async (url) => {
  const res = await API.get(url);
  return res.data.data;
};

export const fetchHousemateById = async (id) => {
  const res = await API.get(`/housemate/${id}`);
  return res.data.data;
};

export const addHousemate = async (data) => {
  const res = await API.post("/housemate", data);
  return res.data.data;
};
