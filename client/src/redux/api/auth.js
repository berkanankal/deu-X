import API from "./index";

export const login = (data) => {
  const res = API.post("/auth/login", data);
  return res;
};

export const register = (data) => {
  const res = API.post("/auth/register", data);
  return res;
};
