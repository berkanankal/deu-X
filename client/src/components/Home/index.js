import React from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card";
import List from "../List";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <List />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card />
          </Grid>
          <Grid item xs={12}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6}>
            <Card />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
