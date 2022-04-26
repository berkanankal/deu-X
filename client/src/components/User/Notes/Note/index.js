import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Ceza from "../../../../images/ceza.jpg";

const Note = () => {
  return (
    <Card>
      <CardMedia component="img" src={Ceza} alt="ceza" />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Dokuz Eylül Üniversitesi
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          Ceza Muhakemesi Hukuku
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          4. Sınıf / Güz Dönemi
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
