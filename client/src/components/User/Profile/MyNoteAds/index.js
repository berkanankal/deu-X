import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import Ceza from "../../../../images/ceza.jpg";
import { Link } from "react-router-dom";

const MyNoteAds = () => {
  return (
    <>
      <Button component={Link} to="add" variant="contained" sx={{ mb: 3 }}>
        Not ilanı ver
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ minWidth: 275 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CardMedia component="img" src={Ceza} alt="ceza" />
              </Grid>
              <Grid item xs={9}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    deneme
                  </Typography>
                  <Typography variant="h5" component="div">
                    deneme
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    deneme
                  </Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default MyNoteAds;
