import API from "./index";

export const fetchCities = async () => {
  const res = await API.get("/city");
  return res.data.data;
};
