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
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
