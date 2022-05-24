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

const Thing = ({ thing }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`http://localhost:5000/uploads/things/${thing.thing_image}`}
        alt="thing_image"
        height={200}
      />
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          {thing.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {thing.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`${thing._id}`} size="small">
          Detay
        </Button>
        <Typography
          sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
          component="div"
        >
          {thing.price} TL
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Thing;
