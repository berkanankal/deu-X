import React from "react";
import Header2 from "../Header2";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <Header2 />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default User;
