import { useEffect } from "react";
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
import Housemates from "./components/User/Housemates";
import NoteDetails from "./components/User/Notes/NoteDetails";
import BookDetails from "./components/User/Books/BookDetails";
import ThingDetails from "./components/User/Things/ThingDetails";
import HousemateDetails from "./components/User/Housemates/HousemateDetails";
import Profile from "./components/User/Profile";
import AccountInfo from "./components/User/Profile/AccountInfo";
import MyHousemateAds from "./components/User/Profile/MyHousemateAds";
import MyThingAds from "./components/User/Profile/MyThingAds";
import MyBookAds from "./components/User/Profile/MyBookAds";
import MyNoteAds from "./components/User/Profile/MyNoteAds";
import AddHousemateForm from "./components/User/Profile/MyHousemateAds/AddHousemateForm";
import AddBookForm from "./components/User/Profile/MyBookAds/AddBookForm";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route
          path="register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/" element={<User />}>
          <Route index element={<Housemates />} />
          <Route path="notlar" element={<Notes />} />
          <Route path="notlar/:id" element={<NoteDetails />} />
          <Route path="kitaplar" element={<Books />} />
          <Route path="kitaplar/:id" element={<BookDetails />} />
          <Route path="esyalar" element={<Things />} />
          <Route path="esyalar/:id" element={<ThingDetails />} />
          <Route path="evarkadaslari" element={<Housemates />} />
          <Route path="evarkadaslari/:id" element={<HousemateDetails />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<AccountInfo />} />
            <Route path="myhousemateads" element={<MyHousemateAds />} />
            <Route path="myhousemateads/add" element={<AddHousemateForm />} />
            <Route path="mythingads" element={<MyThingAds />} />
            <Route path="mybookads" element={<MyBookAds />} />
            <Route path="mybookads/add" element={<AddBookForm />} />
            <Route path="mynoteads" element={<MyNoteAds />} />
          </Route>
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
