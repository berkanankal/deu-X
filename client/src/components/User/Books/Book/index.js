import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import Ybs from "../../../../images/ybs.jpg";

const Book = () => {
  return (
    <Card>
      <CardMedia component="img" src={Ybs} alt="ceza" />
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          Yönetim Bilişim Sistemleri
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Kolektif
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detay</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
