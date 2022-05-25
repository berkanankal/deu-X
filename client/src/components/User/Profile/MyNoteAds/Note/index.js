import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
} from "@mui/material";

const Note = ({ note }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`http://localhost:5000/uploads/notes/${note.note_image}`}
            alt="note_image"
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {note.city.name}
            </Typography>
            <Typography variant="h5" component="div">
              {note.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {note.university.name}
            </Typography>
            <Typography variant="body2">{note.faculty.name}</Typography>
            <Typography variant="body2">{note.department.name}</Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {note.class}. Sınıf /{" "}
              {note.semester === "bahar" ? "Bahar Dönemi" : "Güz Dönemi"}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
              component="div"
            >
              {note.price} TL
            </Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Note;
