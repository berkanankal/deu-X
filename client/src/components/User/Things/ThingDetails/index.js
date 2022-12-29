import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
} from "@mui/material";
import { fetchThingById } from "../../../../redux/thingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading";

const ThingDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { thing } = useSelector((state) => state.things);

  useEffect(() => {
    dispatch(fetchThingById(id));
  }, [dispatch, id]);

  return (
    <>
      {thing.status === "loading" && <Loading />}
      <Card sx={{ minWidth: 275 }}>
        {thing.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                src={`https://uni-x-backend.onrender.com/uploads/things/${thing.data.thing_image}`}
                alt="thing_image"
              />
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
                  {thing.data.university.name}
                </Typography>
                <Typography variant="body2">
                  {thing.data.faculty.name}
                </Typography>
                <Typography variant="body2">
                  {thing.data.department.name}
                </Typography>
                <Typography variant="body2">
                  Kategori: {thing.data.category.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
                  component="div"
                >
                  {thing.data.price} TL
                </Typography>
              </CardActions>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default ThingDetails;
