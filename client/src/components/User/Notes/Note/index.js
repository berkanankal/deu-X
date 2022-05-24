import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`http://localhost:5000/uploads/notes/${note.note_image}`}
        alt="note_image"
      />
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          {note.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`${note._id}`}>
          Detay
        </Button>
        <Typography
          sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
          component="div"
        >
          {note.price} TL
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Note;
