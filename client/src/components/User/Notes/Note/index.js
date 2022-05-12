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

import Ceza from "../../../../images/ceza.jpg";

const Note = ({ note }) => {
  return (
    <Card>
      <CardMedia component="img" src={Ceza} alt="ceza" />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {note.university.name}
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          {note.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {note.faculty.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {note.department.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {note.class}. Sınıf /{" "}
          {note.semester === "bahar" ? "Bahar Dönemi" : "Güz Dönemi"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`${note._id}`}>
          Detay
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
