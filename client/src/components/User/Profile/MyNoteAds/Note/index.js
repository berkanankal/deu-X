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

const Note = ({ note }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`https://uni-x-backend.onrender.com/uploads/notes/${note.note_image}`}
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
              sx={{ fontSize: 18, fontWeight: "bold" }}
              component="div"
            >
              {note.price} TL
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

export default Note;
