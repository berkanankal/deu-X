import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import Ceza from "../../../../../images/ceza.jpg";

const Note = ({ note }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia component="img" src={Ceza} alt="ceza" />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {note.name}
            </Typography>
            <Typography variant="h5" component="div">
              {note.city.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {note.university.name}
            </Typography>
            <Typography variant="body2">{note.faculty.name}</Typography>
            <Typography variant="body2">{note.department.name}</Typography>
            <Typography variant="body2">{note.class}</Typography>
            <Typography variant="body2">{note.semester}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Note;
