import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Housemate from "./Housemate";
import Loading from "../../Loading";
import DataNotFound from "../../DataNotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchHousemates } from "../../../redux/housematesSlice";

const Housemates = () => {
  const dispatch = useDispatch();

  const { housemates } = useSelector((state) => state.housemates);

  console.log(housemates);

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
    selectedHousemate: 0,
  });

  useEffect(() => {
    let url = `http://localhost:5000/api/housemate`;

    if (selectedItems.selectedCity) {
      url = `${url}?city=${selectedItems.selectedCity}`;
    }
    if (selectedItems.selectedUniversity) {
      url = `${url}&university=${selectedItems.selectedUniversity}`;
    }
    if (selectedItems.selectedFaculty) {
      url = `${url}&faculty=${selectedItems.selectedFaculty}`;
    }
    if (selectedItems.selectedDepartment) {
      url = `${url}&department=${selectedItems.selectedDepartment}`;
    }

    if (selectedItems.selectedHousemate) {
      if (url.includes("?")) {
        url = `${url}&typeOfHousemate=${selectedItems.selectedHousemate}`;
      } else {
        url = `${url}?typeOfHousemate=${selectedItems.selectedHousemate}`;
      }
    }

    dispatch(fetchHousemates(url));
  }, [selectedItems, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </Grid>
      <Grid item xs={9}>
        {housemates.status === "loading" && <Loading />}
        <Grid container spacing={2}>
          {housemates.status === "succeeded" &&
            housemates.data.map((housemate) => (
              <Grid key={housemate._id} item xs={12}>
                <Housemate housemate={housemate} />
              </Grid>
            ))}
        </Grid>
        {housemates.status === "succeeded" && housemates.data.length < 1 && (
          <DataNotFound message="Ev arkadaşı bulunamadı" />
        )}

        {housemates.data.length > 0 && (
          <Pagination
            count={10}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              marginTop: 100,
              marginBottom: 100,
              position: "relative",
              left: "25%",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Housemates;
