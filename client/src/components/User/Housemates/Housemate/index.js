import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Housemate = ({ housemate }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`/images/${housemate.user.gender}.png`}
            alt="housemate-img"
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {housemate.city.name} - {housemate.university.name}
            </Typography>
            <Typography variant="h5" component="div">
              {housemate.user.name}
            </Typography>
            <Typography variant="body2">
              {housemate.typeOfHousemate === "1"
                ? "Kalacak ev arıyorum"
                : "Evime arkadaş arıyorum"}
            </Typography>
            <Typography variant="body2">
              {housemate.typeOfHousemate === "1"
                ? `Maksimum ${housemate.rent} TL kira verebilirim`
                : `Ev kirası ${housemate.rent} TL`}
            </Typography>
            <Typography variant="body2">
              {housemate.cigarette && "Sigara kullanıyorum - "}
              {housemate.alcohol && "Alkol kullanıyorum - "}
              {housemate.vegetarian && "Vejetaryenim - "}
              {housemate.vegan && "Veganım - "}
              {housemate.child && "Çocuğum var - "}
              {housemate.pet && "Evcil hayvanım var - "}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`${housemate._id}`} size="small">
              Detay
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Housemate;
