import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import Raspberry from "../../../../../images/raspberry.jpg";

const Thing = ({ thing }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia component="img" src={Raspberry} alt="ceza" />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {thing.name}
            </Typography>
            <Typography variant="h5" component="div">
              {thing.city.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {thing.university.name}
            </Typography>
            <Typography variant="body2">{thing.faculty.name}</Typography>
            <Typography variant="body2">{thing.department.name}</Typography>
            <Typography variant="body2">{thing.category.name}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Thing;
