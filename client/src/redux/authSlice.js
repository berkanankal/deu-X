import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state) => {
      if (localStorage.getItem("user")) {
        state.user = JSON.parse(localStorage.getItem("user"));
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
