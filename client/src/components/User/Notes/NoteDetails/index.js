import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
} from "@mui/material";
import { fetchNoteById } from "../../../../redux/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading";

const NoteDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { note } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNoteById(id));
  }, [dispatch, id]);

  return (
    <>
      {note.status === "loading" && <Loading />}
      <Card sx={{ minWidth: 275 }}>
        {note.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                src={`https://uni-x-backend.onrender.com/uploads/notes/${note.data.note_image}`}
                alt="note_image"
              />
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
              <CardActions>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                  component="div"
                >
                  {note.data.price} TL
                </Typography>
              </CardActions>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default NoteDetails;
