import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
} from "@mui/material";
import { fetchBookById } from "../../../../redux/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { book } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  return (
    <>
      {book.status === "loading" && <Loading />}
      <Card sx={{ minWidth: 275 }}>
        {book.status === "succeeded" && (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                src={`https://uni-x-backend.onrender.com/uploads/books/${book.data.book_image}`}
                alt="book_image"
              />
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
                <Typography variant="body2">
                  Kitap türü:{" "}
                  {book.data.typeOfBook === "ders" ? "Ders Kitabı" : "Roman"}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
                  component="div"
                >
                  {book.data.price} TL
                </Typography>
              </CardActions>
            </Grid>
          </Grid>
        )}
      </Card>
    </>
  );
};

export default BookDetails;
