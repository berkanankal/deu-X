import React from "react";
import Header from "../Header";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default User;
