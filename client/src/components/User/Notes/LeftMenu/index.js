import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ListSubheader,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const LeftMenu = ({
  selectedItems,
  setSelectedItems,
  classCheckbox,
  setClassChecbox,
  semesterCheckbox,
  setSemesterCheckbox,
  setSearchQuery,
}) => {
  const classes = useStyles();

  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/city").then((res) => {
      setCities(res.data.data);
    });
    axios.get("http://localhost:5000/api/university").then((res) => {
      setUniversities(res.data.data);
    });
    axios.get("http://localhost:5000/api/faculty").then((res) => {
      setFaculties(res.data.data);
    });
    axios.get("http://localhost:5000/api/department").then((res) => {
      setDepartments(res.data.data);
    });
  }, []);

  const onChangeSelectInput = (e) => {
    setSelectedItems({
      ...selectedItems,
      [e.target.name]: e.target.value,
    });
  };

  const handleClassChecbox = (e) => {
    let newArray = [...classCheckbox, e.target.value];
    if (classCheckbox.includes(e.target.value)) {
      newArray = newArray.filter((sinif) => sinif !== e.target.value);
    }
    setClassChecbox(newArray);
  };

  const handleSemesterChecbox = (e) => {
    let newArray = [...semesterCheckbox, e.target.value];
    if (semesterCheckbox.includes(e.target.value)) {
      newArray = newArray.filter((semester) => semester !== e.target.value);
    }
    setSemesterCheckbox(newArray);
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
            name="searchQuery"
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
                <MenuItem value={city._id} key={city._id}>
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
              {universities.map(
                (university) =>
                  university.city === selectedItems.selectedCity && (
                    <MenuItem value={university._id} key={university._id}>
                      {university.name}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl
            fullWidth
            disabled={
              selectedItems.selectedCity === 0 ||
              selectedItems.selectedUniversity === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Fakülte</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Fakülte"
              name="selectedFaculty"
              value={
                selectedItems.selectedUniversity === 0 ||
                selectedItems.selectedCity === 0
                  ? 0
                  : selectedItems.selectedFaculty
              }
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm Fakülteler</MenuItem>
              {faculties.map(
                (faculty) =>
                  faculty.university === selectedItems.selectedUniversity && (
                    <MenuItem value={faculty._id} key={faculty._id}>
                      {faculty.name}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl
            fullWidth
            disabled={
              selectedItems.selectedCity === 0 ||
              selectedItems.selectedUniversity === 0 ||
              selectedItems.selectedFaculty === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bölüm"
              name="selectedDepartment"
              value={
                selectedItems.selectedUniversity === 0 ||
                selectedItems.selectedCity === 0 ||
                selectedItems.selectedFaculty === 0
                  ? 0
                  : selectedItems.selectedDepartment
              }
              onChange={onChangeSelectInput}
            >
              <MenuItem value={0}>Tüm Bölümler</MenuItem>
              {departments.map(
                (department) =>
                  department.faculty === selectedItems.selectedFaculty && (
                    <MenuItem value={department._id} key={department._id}>
                      {department.name}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        className={classes.list}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Sınıf
          </ListSubheader>
        }
      >
        <ListItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="1. Sınıf"
              value="1"
              onChange={handleClassChecbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="2. Sınıf"
              value="2"
              onChange={handleClassChecbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="3. Sınıf"
              value="3"
              onChange={handleClassChecbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="4. Sınıf"
              value="4"
              onChange={handleClassChecbox}
            />
          </FormGroup>
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        className={classes.list}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dönem
          </ListSubheader>
        }
      >
        <ListItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Güz Dönemi"
              value={"guz"}
              onChange={handleSemesterChecbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bahar Dönemi"
              value={"bahar"}
              onChange={handleSemesterChecbox}
            />
          </FormGroup>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftMenu;
