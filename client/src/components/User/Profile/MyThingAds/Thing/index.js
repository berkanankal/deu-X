import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Thing = ({ thing }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`https://uni-x-backend.onrender.com/uploads/things/${thing.thing_image}`}
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
              sx={{ fontSize: 18, fontWeight: "bold" }}
              component="div"
            >
              {thing.price} TL
            </Typography>
            <IconButton color="warning" style={{ marginLeft: "auto" }}>
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Thing;
