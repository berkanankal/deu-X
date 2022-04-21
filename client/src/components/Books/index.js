import React from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Book from "./Book";

const Books = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={3}>
              <Book />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
          style={{ marginTop: 130 }}
        />
      </Grid>
    </Grid>
  );
};

export default Books;
