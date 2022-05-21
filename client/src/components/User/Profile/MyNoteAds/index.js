import { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../../redux/notesSlice";
import Note from "./Note";

const MyNoteAds = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    if (notes.status === "idle") {
      const url = `http://localhost:5000/api/note`;
      dispatch(fetchNotes(url));
    }
  }, [dispatch, notes.status]);

  return (
    <>
      <Button component={Link} to="add" variant="contained" sx={{ mb: 3 }}>
        Not ilanı ver
      </Button>
      <Grid container spacing={2}>
        {notes.data.map((note) => (
          <Grid item xs={12} key={note._id}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyNoteAds;
