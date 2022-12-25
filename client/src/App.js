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
import { useSelector } from "react-redux";

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
import AddBookForm from "./components/User/Profile/MyBookAds/AddBookForm";
import AddThingForm from "./components/User/Profile/MyThingAds/AddThingForm/AddThingForm";
import AddNoteForm from "./components/User/Profile/MyNoteAds/AddNoteForm";
import Home from "./components/User/Home";
import FriendsToMyHouse from "./components/User/Profile/MyHousemateAds/AddHousemateForm/FriendsToMyHouse";
import PlaceToStay from "./components/User/Profile/MyHousemateAds/AddHousemateForm/PlaceToStay";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<User />}>
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:id" element={<NoteDetails />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetails />} />
          <Route path="things" element={<Things />} />
          <Route path="things/:id" element={<ThingDetails />} />
          <Route path="housemates" element={<Housemates />} />
          <Route path="housemates/:id" element={<HousemateDetails />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<AccountInfo />} />
            <Route path="myhousemateads" element={<MyHousemateAds />} />
            <Route
              path="myhousemateads/friendstomyhouse"
              element={<FriendsToMyHouse />}
            />
            <Route
              path="myhousemateads/placetostay"
              element={<PlaceToStay />}
            />
            <Route path="mythingads" element={<MyThingAds />} />
            <Route path="mythingads/add" element={<AddThingForm />} />
            <Route path="mybookads" element={<MyBookAds />} />
            <Route path="mybookads/add" element={<AddBookForm />} />
            <Route path="mynoteads" element={<MyNoteAds />} />
            <Route path="mynoteads/add" element={<AddNoteForm />} />
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
