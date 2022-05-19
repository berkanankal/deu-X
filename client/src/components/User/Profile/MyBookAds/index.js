import { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Book from "./Book";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../../../redux/booksSlice";

const MyBookAds = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  console.log(books);

  useEffect(() => {
    const url = "http://localhost:5000/api/book";
    dispatch(fetchBooks(url));
  }, [dispatch]);

  return (
    <>
      <Button component={Link} to="add" variant="contained" sx={{ mb: 3 }}>
        Kitap ilanı ver
      </Button>
      <Grid container spacing={2}>
        {books.data.map((book) => (
          <Grid item xs={12} key={book._id}>
            <Book book={book} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyBookAds;
