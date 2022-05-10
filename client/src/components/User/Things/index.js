import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Thing from "./Thing";
import { fetchThings } from "../../../../redux/thingsSlice";
import { useDispatch, useSelector } from "react-redux";

const Things = () => {
  const items = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
    selectedCategory: 0,
  });

  const [semesterCheckbox, setSemesterCheckbox] = useState([]);

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
    if (searchQuery !== "") {
      if (url.includes("?")) {
        url = `${url}&search=${searchQuery}`;
      } else {
        url = `${url}?search=${searchQuery}`;
      }
    }

    dispatch(fetchThings(url));
  }, [selectedItems, semesterCheckbox, searchQuery, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu setSearchQuery={setSearchQuery} />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={3}>
              <Thing />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
          style={{ marginTop: 130 }}
        />
      </Grid>
    </Grid>
  );
};

export default Things;
