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
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../../../../redux/citiesSlice";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const LeftMenu = ({ selectedItems, setSelectedItems }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { cities } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
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
  };

  const onChangeRadioButtons = (e) => {
    setSelectedItems({
      ...selectedItems,
      selectedHousemate: e.target.value,
    });
  };

  return (
    <Box>
      <List className={classes.list}>
        <ListItem>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="selectedHousemate"
              onChange={onChangeRadioButtons}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Kalacak ev arayanlar"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Evine arkadaş arayanlar"
              />
            </RadioGroup>
          </FormControl>
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
    </Box>
  );
};

export default LeftMenu;
