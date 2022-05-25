import { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHousemates } from "../../../../redux/housematesSlice";
import Housemate from "./Housemate";

const MyHousemateAds = () => {
  const dispatch = useDispatch();
  const { housemates } = useSelector((state) => state.housemates);
  const user = useSelector((state) => state.auth.user);

  const filteredHousemates = housemates.data.filter(
    (housemate) => housemate.user._id === user.id
  );

  useEffect(() => {
    if (housemates.status === "idle") {
      const url = "http://localhost:5000/api/housemate";
      dispatch(fetchHousemates(url));
    }
  }, [dispatch, housemates.status]);

  return (
    <>
      <Button
        component={Link}
        to="friendstomyhouse"
        variant="contained"
        sx={{ mb: 3, mr: 2 }}
      >
        Evime arkadaş arıyorum
      </Button>
      <Button
        component={Link}
        to="placetostay"
        variant="contained"
        sx={{ mb: 3 }}
      >
        Kalacak yer arıyorum
      </Button>
      <Grid container spacing={2}>
        {filteredHousemates.map((housemate) => (
          <Grid item xs={12} key={housemate._id}>
            <Housemate housemate={housemate} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyHousemateAds;
