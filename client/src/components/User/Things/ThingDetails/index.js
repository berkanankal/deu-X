import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import Raspberry from "../../../../images/raspberry.jpg";
import { fetchThingById } from "../../../../redux/thingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ThingDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { thing } = useSelector((state) => state.things);

  useEffect(() => {
    dispatch(fetchThingById(id));
  }, [dispatch, id]);

  console.log(thing);

  return (
    <>
      {thing.status === "loading" && <div>Loading...</div>}
      <Card sx={{ minWidth: 275 }}>
        {thing.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia component="img" src={Raspberry} alt="ceza" />
            </Grid>
            <Grid item xs={9}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {thing.data.city.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {thing.data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {thing.data.description}
                </Typography>
                <Typography variant="body2">
                  {thing.data.price} TL
                </Typography>
                <Typography variant="body2">
                  {thing.data.university.name}
                </Typography>
                <Typography variant="body2">
                  {thing.data.faculty.name}
                </Typography>
                <Typography variant="body2">
                  {thing.data.department.name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default ThingDetails;
