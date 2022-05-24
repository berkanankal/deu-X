import { useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import YBS from "../../../../images/ybs.jpg";
import { fetchBookById } from "../../../../redux/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { book } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  return (
    <>
      {book.status === "loading" && <div>Loading...</div>}
      <Card sx={{ minWidth: 275 }}>
        {book.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia component="img" src={YBS} alt="ceza" />
            </Grid>
            <Grid item xs={9}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {book.data.city.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {book.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {book.data.author}
                </Typography>
                <Typography variant="body2">
                  {book.data.university.name}
                </Typography>
                <Typography variant="body2">
                  {book.data.faculty.name}
                </Typography>
                <Typography variant="body2">
                  {book.data.department.name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default BookDetails;
