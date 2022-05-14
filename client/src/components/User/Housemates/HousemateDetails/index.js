import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import User from "../../../../images/user.jpg";
import { fetchHousemateById } from "../../../../redux/housematesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HousemateDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { housemate } = useSelector((state) => state.housemates);

  useEffect(() => {
    dispatch(fetchHousemateById(id));
  }, [dispatch, id]);

  return (
    <>
      {housemate.status === "loading" && <div>Loading...</div>}
      <Card sx={{ minWidth: 275 }}>
        {housemate.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia component="img" src={User} alt="ceza" />
            </Grid>
            <Grid item xs={9}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {housemate.data.city.name}
                </Typography>
                <Typography variant="body2">
                  {housemate.data.university.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {housemate.data.faculty.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {housemate.data.department.name}
                </Typography>
                <Typography variant="body2">
                  {housemate.data.typeOfHousemate}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default HousemateDetails;
