import API from "./index";

export const fetchThingCategories = async () => {
  const res = await API.get("/thingCategory");
  return res.data.data;
};
