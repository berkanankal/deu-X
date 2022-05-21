import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Thing from "./Thing";
import { fetchThings } from "../../../redux/thingsSlice";
import { useDispatch, useSelector } from "react-redux";

const Things = () => {
  const dispatch = useDispatch();

  const { things } = useSelector((state) => state.things);

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
    selectedThingCategory: 0,
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url = `http://localhost:5000/api/thing`;

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
    if (selectedItems.selectedThingCategory) {
      if (url.includes("?")) {
        url = `${url}&category=${selectedItems.selectedThingCategory}`;
      } else {
        url = `${url}?category=${selectedItems.selectedThingCategory}`;
      }
    }

    if (searchQuery !== "") {
      if (url.includes("?")) {
        url = `${url}&search=${searchQuery}`;
      } else {
        url = `${url}?search=${searchQuery}`;
      }
    }

    dispatch(fetchThings(url));
  }, [selectedItems, searchQuery, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu
          setSearchQuery={setSearchQuery}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {things.status === "loading" ? (
            <div>Loading...</div>
          ) : things.data.length > 0 ? (
            things.data.map((thing) => (
              <Grid item xs={3} key={thing._id}>
                <Thing key={thing._id} thing={thing} />
              </Grid>
            ))
          ) : (
            <div>Eşya yok</div>
          )}
        </Grid>

        {things.length > 0 && (
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

export default Things;
