import { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../../redux/notesSlice";

const Notes = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);

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
      if (url.includes("?")) {
        url = `${url}&class=${classCheckbox.join(",")}`;
      } else {
        url = `${url}?class=${classCheckbox.join(",")}`;
      }
    }

    if (semesterCheckbox.length) {
      if (url.includes("?")) {
        url = `${url}&semester=${semesterCheckbox.join(",")}`;
      } else {
        url = `${url}?semester=${semesterCheckbox.join(",")}`;
      }
    }

    dispatch(fetchNotes(url));
  }, [selectedItems, classCheckbox, semesterCheckbox, searchQuery, dispatch]);

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
          {notes.status === "loading" ? (
            <div>Loading...</div>
          ) : notes.data.length > 0 ? (
            notes.data.map((note) => (
              <Grid item xs={3} key={note._id}>
                <Note note={note} />
              </Grid>
            ))
          ) : (
            <div>Not yok</div>
          )}
        </Grid>

        {notes.data.length > 0 && (
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

export default Notes;
