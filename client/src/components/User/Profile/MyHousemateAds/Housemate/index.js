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

const Housemate = ({ housemate }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`http://localhost:5000/${housemate.user.gender}.png`}
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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {housemate.faculty.name} - {housemate.department.name}
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
            <br />
            <Typography variant="body2">{housemate.details}</Typography>
          </CardContent>
          <CardActions>
            <IconButton color="warning" style={{marginLeft: "auto"}}>
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

export default Housemate;
