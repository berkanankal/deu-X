import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import User from "../../../../../images/user.jpg";

const Housemate = ({ housemate }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia component="img" src={User} alt="ceza" />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {housemate.city.name}
            </Typography>
            <Typography variant="body2">{housemate.university.name}</Typography>
            <Typography variant="h5" component="div">
              {housemate.faculty.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {housemate.department.name}
            </Typography>
            <Typography variant="body2">{housemate.typeOfHousemate}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Housemate;
