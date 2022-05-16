import React from "react";
import Grid from "@mui/material/Grid";
import LeftMenu from "./LeftMenu";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <LeftMenu />
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Profile;
