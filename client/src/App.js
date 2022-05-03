import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import Dashboard from "./components/Admin/Dashboard";
import Notes from "./components/User/Notes";
import Books from "./components/User/Books";
import Things from "./components/User/Things";
import UserHome from "./components/User/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardHome from "./components/Admin/Dashboard/Home";
import University from "./components/Admin/Dashboard/University";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<UserHome />} />
          <Route path="notlar" element={<Notes />} />
          <Route path="kitaplar" element={<Books />} />
          <Route path="esyalar" element={<Things />} />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="university" element={<University />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
