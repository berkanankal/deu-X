import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import YBS from "../../../../../images/ybs.jpg";

const Book = ({ book }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia component="img" src={YBS} alt="ceza" />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {book.name}
            </Typography>
            <Typography variant="body2">{book.author}</Typography>
            <Typography variant="h5" component="div">
              {book.city.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {book.university.name}
            </Typography>
            <Typography variant="body2">{book.faculty.name}</Typography>
            <Typography variant="body2">{book.department.name}</Typography>
            <Typography variant="body2">{book.typeOfBook}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Book;
