import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Housemate from "./Housemate";
import { useDispatch, useSelector } from "react-redux";
import { fetchHousemates } from "../../../redux/housematesSlice";

const Housemates = () => {
  const dispatch = useDispatch();

  const { housemates } = useSelector((state) => state.housemates);

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
        <Grid container spacing={2}>
          {housemates.loading ? (
            <div>Loading...</div>
          ) : housemates.data.length > 0 ? (
            housemates.data.map((housemate) => (
              <Grid item xs={12} key={housemate._id}>
                <Housemate housemate={housemate} />
              </Grid>
            ))
          ) : (
            <div>Ev arkadaşı yok</div>
          )}
        </Grid>

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
