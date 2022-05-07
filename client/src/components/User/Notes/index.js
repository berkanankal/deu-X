import { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Note from "./Note";
import axios from "axios";

const Notes = () => {
  const items = [1, 2, 3, 4, 5, 6];

  const [notes, setNotes] = useState([]);

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
  });

  const [classCheckbox, setClassChecbox] = useState([]);
  const [semesterCheckbox, setSemesterCheckbox] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url = `http://localhost:5000/api/note`;

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

    if (classCheckbox.length) {
      if (selectedItems.selectedCity) {
        url = `${url}&class=${classCheckbox}`;
      } else {
        url = `${url}?class=${classCheckbox}`;
      }
    }

    if (semesterCheckbox.length) {
      if (selectedItems.selectedCity || classCheckbox.length > 0) {
        url = `${url}&semester=${semesterCheckbox}`;
      } else {
        url = `${url}?semester=${semesterCheckbox}`;
      }
    }

    axios.get(url).then((res) => setNotes(res.data.data));
  }, [selectedItems, classCheckbox, semesterCheckbox, searchQuery]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          classCheckbox={classCheckbox}
          setClassChecbox={setClassChecbox}
          semesterCheckbox={semesterCheckbox}
          setSemesterCheckbox={setSemesterCheckbox}
          setSearchQuery={setSearchQuery}
        />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs={3}>
              <Note note={note} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
          style={{ marginTop: 100 }}
        />
      </Grid>
    </Grid>
  );
};

export default Notes;
