import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import Ceza from "../../../../images/ceza.jpg";
import { fetchNoteById } from "../../../../redux/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NoteDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { note } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNoteById(id));
  }, [dispatch, id]);

  return (
    <>
      {note.status === "loading" && <div>Loading...</div>}
      <Card sx={{ minWidth: 275 }}>
        {note.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia component="img" src={Ceza} alt="ceza" />
            </Grid>
            <Grid item xs={9}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {note.data.city.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {note.data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {note.data.university.name}
                </Typography>
                <Typography variant="body2">
                  {note.data.faculty.name}
                </Typography>
                <Typography variant="body2">
                  {note.data.department.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {note.data.class}. Sınıf /{" "}
                  {note.data.semester === "bahar"
                    ? "Bahar Dönemi"
                    : "Güz Dönemi"}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default NoteDetails;
