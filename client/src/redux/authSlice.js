import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as API from "./api/auth";

const toastSettings = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const login = createAsyncThunk("auth/login", (data, thunkAPI) => {
  return API.login(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) {
        throw err;
      }

      return thunkAPI.rejectWithValue(err.response.data);
    });
});

export const register = createAsyncThunk("auth/register", (data, thunkAPI) => {
  return API.register(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) {
        throw err;
      }

      return thunkAPI.rejectWithValue(err.response.data);
    });
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    // Login
    [login.fulfilled]: (state, action) => {
      if (action.payload.data.success) {
        state.user = action.payload.data.user;
        toast.success("Giriş başarılı!", toastSettings);
      }
    },
    [login.rejected]: (state, action) => {
      if (action.payload.message === "Please check your credentials") {
        toast.error("Email veya parola yanlış!", toastSettings);
      }
    },
    // Register
    [register.fulfilled]: (state, action) => {
      if (action.payload.data.success) {
        toast.success("Kayıt başarılı!", toastSettings);
      }
    },
    [register.rejected]: (state, action) => {
      if (
        action.payload.message === "Duplicate Key Error: Please Check Your Info"
      ) {
        toast.error("Bu email adresi zaten kayıtlı!", toastSettings);
      }
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
