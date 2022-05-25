import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
} from "@mui/material";

const Thing = ({ thing }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`http://localhost:5000/uploads/things/${thing.thing_image}`}
            alt="thing_image"
            height={200}
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {thing.city.name}
            </Typography>
            <Typography variant="h5" component="div">
              {thing.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {thing.description}
            </Typography>
            <Typography variant="body2">{thing.university.name}</Typography>
            <Typography variant="body2">{thing.faculty.name}</Typography>
            <Typography variant="body2">{thing.department.name}</Typography>
            <Typography variant="body2">
              Kategori: {thing.category.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
              component="div"
            >
              {thing.price} TL
            </Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Thing;
