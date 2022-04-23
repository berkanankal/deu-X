import React from "react";
import "./App.css";
import Header2 from "./components/Header2";
import Notes from "./components/Notes";
import Books from "./components/Books";
import Things from "./components/Things";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header2 />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notlar" element={<Notes />} />
          <Route path="/kitaplar" element={<Books />} />
          <Route path="/esyalar" element={<Things />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
