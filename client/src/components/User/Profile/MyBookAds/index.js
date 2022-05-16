import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import YBS from "../../../../images/ybs.jpg";

const MyBookAds = () => {
  return (
    <>
      <Button variant="contained" sx={{ mb: 3 }}>
        Kitap ilanı ver
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ minWidth: 275 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CardMedia component="img" src={YBS} alt="ceza" />
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
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="h5" component="div">
                    deneme
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    deneme
                  </Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ minWidth: 275 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CardMedia component="img" src={YBS} alt="ceza" />
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
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="h5" component="div">
                    deneme
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    deneme
                  </Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                  <Typography variant="body2">deneme</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MyBookAds;
