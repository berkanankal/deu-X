import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import Ceza from "../../../../images/ceza.jpg";
import { fetchNoteById } from "../../../../redux/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NoteDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNoteById(id));
  }, [dispatch, id]);

  return (
    <Card sx={{ minWidth: 275 }}>
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
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              deneme
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NoteDetails;
