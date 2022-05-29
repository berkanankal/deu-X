import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Book = ({ book }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            src={`http://localhost:5000/uploads/books/${book.book_image}`}
            alt="book_image"
            height={250}
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {book.city.name}
            </Typography>
            <Typography variant="h5" component="div">
              {book.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {book.author}
            </Typography>
            <Typography variant="body2">{book.university.name}</Typography>
            <Typography variant="body2">{book.faculty.name}</Typography>
            <Typography variant="body2">{book.department.name}</Typography>
            <Typography variant="body2">
              Kitap türü: {book.typeOfBook === "ders" ? "Ders Kitabı" : "Roman"}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold" }}
              component="div"
            >
              {book.price} TL
            </Typography>
            <IconButton color="warning" style={{ marginLeft: "auto" }}>
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Book;
