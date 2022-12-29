import { useEffect } from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../../../redux/citiesSlice";
import { fetchThingCategories } from "../../../../redux/thingCategoriesSlice";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const LeftMenu = ({ setSearchQuery, selectedItems, setSelectedItems }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { cities } = useSelector((state) => state.cities);
  const { thingCategories } = useSelector((state) => state.thingCategories);

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchThingCategories());
  }, [dispatch]);

  const onChangeSelectInput = (e) => {
    if (e.target.name === "selectedCity") {
      setSelectedItems({
        ...selectedItems,
        selectedCity: e.target.value,
        selectedUniversity: 0,
        selectedFaculty: 0,
        selectedDepartment: 0,
      });
    }
    if (e.target.name === "selectedUniversity") {
      setSelectedItems({
        ...selectedItems,
        selectedUniversity: e.target.value,
        selectedFaculty: 0,
        selectedDepartment: 0,
      });
    }
    if (e.target.name === "selectedFaculty") {
      setSelectedItems({
        ...selectedItems,
        selectedFaculty: e.target.value,
        selectedDepartment: 0,
      });
    }
    if (e.target.name === "selectedDepartment") {
      setSelectedItems({
        ...selectedItems,
        selectedDepartment: e.target.value,
      });
    }
    if (e.target.name === "selectedThingCategory") {
      setSelectedItems({
        ...selectedItems,
        selectedThingCategory: e.target.value,
      });
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box>
      <List className={classes.list}>
        <ListItem>
          <TextField
            fullWidth
            id="standard-bare"
            variant="outlined"
            placeholder="Aranacak kelime"
            onChange={onChangeSearchInput}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlinedIcon></SearchOutlinedIcon>
                </IconButton>
              ),
            }}
          />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.list}>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Şehir</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Şehir"
              name="selectedCity"
              value={selectedItems.selectedCity}
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm şehirler</MenuItem>
              {cities.map((city) => (
                <MenuItem key={city._id} value={city._id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl fullWidth disabled={selectedItems.selectedCity === 0}>
            <InputLabel id="demo-simple-select-label">Üniversite</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Üniversite"
              name="selectedUniversity"
              value={
                selectedItems.selectedCity === 0
                  ? 0
                  : selectedItems.selectedUniversity
              }
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm üniversiteler</MenuItem>
              {cities.map((city) =>
                city.universities.map(
                  (university) =>
                    university.city === selectedItems.selectedCity && (
                      <MenuItem key={university._id} value={university._id}>
                        {university.name}
                      </MenuItem>
                    )
                )
              )}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl
            fullWidth
            disabled={
              selectedItems.selectedUniversity === 0 ||
              selectedItems.selectedCity === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Fakülte</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Fakülte"
              name="selectedFaculty"
              value={selectedItems.selectedFaculty}
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm fakülteler</MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map(
                    (faculty) =>
                      faculty.university ===
                        selectedItems.selectedUniversity && (
                        <MenuItem key={faculty._id} value={faculty._id}>
                          {faculty.name}
                        </MenuItem>
                      )
                  )
                )
              )}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl
            fullWidth
            disabled={
              selectedItems.selectedUniversity === 0 ||
              selectedItems.selectedCity === 0 ||
              selectedItems.selectedFaculty === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bölüm"
              name="selectedDepartment"
              value={selectedItems.selectedDepartment}
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm bölümler</MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map((faculty) =>
                    faculty.departments.map(
                      (department) =>
                        department.faculty ===
                          selectedItems.selectedFaculty && (
                          <MenuItem key={department._id} value={department._id}>
                            {department.name}
                          </MenuItem>
                        )
                    )
                  )
                )
              )}
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <Divider />
      <List className={classes.list}>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Kategori"
              name="selectedThingCategory"
              value={selectedItems.selectedThingCategory}
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm kategoriler</MenuItem>
              {thingCategories.map((thingCategory) => (
                <MenuItem key={thingCategory._id} value={thingCategory._id}>
                  {thingCategory.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftMenu;
