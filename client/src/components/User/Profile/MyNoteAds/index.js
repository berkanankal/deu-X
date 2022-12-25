import { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../../redux/notesSlice";
import Note from "./Note";
import DataNotFound from "../../../DataNotFound";

const MyNoteAds = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);
  const user = useSelector((state) => state.auth.user);

  const filteredNotes = notes.data.filter((note) => note.user === user.id);

  useEffect(() => {
    if (notes.status === "idle") {
      const url = `/note`;
      dispatch(fetchNotes(url));
    }
  }, [dispatch, notes.status]);

  return (
    <>
      <Button component={Link} to="add" variant="contained" sx={{ mb: 3 }}>
        Not ilanı ver
      </Button>
      <Grid container spacing={2}>
        {filteredNotes.map((note) => (
          <Grid item xs={12} key={note._id}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
      {notes.status === "succeeded" && filteredNotes.length < 1 && (
        <DataNotFound message="Not ilanı bulunamadı" />
      )}
    </>
  );
};

export default MyNoteAds;
