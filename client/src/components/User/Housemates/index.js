import React from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Housemate from "./Housemate";

const Housemates = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
          <Grid item xs={6}>
            <Housemate />
          </Grid>
        </Grid>

        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
          style={{
            marginTop: 100,
            marginBottom: 100,
            position: "relative",
            left: "25%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Housemates;
