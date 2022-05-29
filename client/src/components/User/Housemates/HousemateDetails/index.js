import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import { fetchHousemateById } from "../../../../redux/housematesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading";

const HousemateDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { housemate } = useSelector((state) => state.housemates);

  console.log(housemate);

  useEffect(() => {
    dispatch(fetchHousemateById(id));
  }, [dispatch, id]);

  return (
    <>
      {housemate.status === "loading" && <Loading />}
      <Card sx={{ minWidth: 275 }}>
        {housemate.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                src={`http://localhost:5000/${housemate.data.user.gender}.png`}
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
                  {housemate.data.city.name} - {housemate.data.university.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {housemate.data.faculty.name} -{" "}
                  {housemate.data.department.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {housemate.data.user.name}
                </Typography>
                <Typography variant="body2">
                  {housemate.data.typeOfHousemate === "1"
                    ? "Kalacak ev arıyorum"
                    : "Evime arkadaş arıyorum"}
                </Typography>
                <Typography variant="body2">
                  {housemate.data.typeOfHousemate === "1"
                    ? `Maksimum ${housemate.data.rent} TL kira verebilirim`
                    : `Ev kirası ${housemate.data.rent} TL`}
                </Typography>
                <Typography variant="body2">
                  {housemate.data.cigarette && "Sigara kullanıyorum - "}
                  {housemate.data.alcohol && "Alkol kullanıyorum - "}
                  {housemate.data.vegetarian && "Vejetaryenim - "}
                  {housemate.data.vegan && "Veganım - "}
                  {housemate.data.child && "Çocuğum var - "}
                  {housemate.data.pet && "Evcil hayvanım var - "}
                </Typography>
                <br />
                <Typography variant="body2">
                  {housemate.data.details}
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
