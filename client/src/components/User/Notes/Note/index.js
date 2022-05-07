import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

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
    </Card>
  );
};

export default Note;
