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

const LeftMenu = () => {
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

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
  });

  console.log(selectedItems);

  const onChangeSelectInput = (e) => {
    setSelectedItems({
      ...selectedItems,
      [e.target.name]: e.target.value,
    });
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
              control={<Checkbox defaultChecked />}
              label="1. Sınıf"
            />
            <FormControlLabel control={<Checkbox />} label="2. Sınıf" />
            <FormControlLabel control={<Checkbox />} label="3. Sınıf" />
            <FormControlLabel control={<Checkbox />} label="4. Sınıf" />
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
              control={<Checkbox defaultChecked />}
              label="Güz Dönemi"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bahar Dönemi"
            />
          </FormGroup>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftMenu;
