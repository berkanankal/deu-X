import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import Raspberry from "../../../../images/raspberry.jpg";

const Thing = ({ thing }) => {
  return (
    <Card>
      <CardMedia component="img" src={Raspberry} alt="ceza" />
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          {thing.name}
        </Typography>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.author}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Detay</Button>
      </CardActions>
    </Card>
  );
};

export default Thing;
