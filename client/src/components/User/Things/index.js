import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Thing from "./Thing";
import Loading from "../../Loading";
import DataNotFound from "../../DataNotFound";
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
        {things.status === "loading" && <Loading />}
        <Grid container spacing={2}>
          {things.status === "succeeded" &&
            things.data.map((thing) => (
              <Grid key={thing._id} item xs={3}>
                <Thing thing={thing} />
              </Grid>
            ))}
        </Grid>
        {things.status === "succeeded" && things.data.length < 1 && (
          <DataNotFound message="Eşya bulunamadı" />
        )}

        {things.data.length > 0 && (
          <Pagination
            count={1}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              marginTop: 100,
              marginBottom: 100,
              position: "relative",
              left: "40%",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Things;
