import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`https://uni-x-backend.onrender.com/uploads/books/${book.book_image}`}
        alt="book_image"
        height="300"
      />
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} component="div">
          {book.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`${book._id}`} size="small">
          Detay
        </Button>
        <Typography
          sx={{ fontSize: 18, fontWeight: "bold", marginLeft: "auto" }}
          component="div"
        >
          {book.price} TL
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Book;
