import { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import LeftMenu from "./LeftMenu";
import Book from "./Book";
import Loading from "../../Loading";
import DataNotFound from "../../DataNotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../redux/booksSlice";

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const [selectedItems, setSelectedItems] = useState({
    selectedCity: 0,
    selectedUniversity: 0,
    selectedFaculty: 0,
    selectedDepartment: 0,
  });

  const [typeOfBookCheckbox, setTypeOfBookCheckbox] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url = `http://localhost:5000/api/book`;

    if (selectedItems.selectedCity) {
      url = `${url}?city=${selectedItems.selectedCity}`;
    }
    if (selectedItems.selectedUniversity) {
      url = `${url}&university=${selectedItems.selectedUniversity}`;
    }
    if (selectedItems.selectedFaculty) {
      url = `${url}&faculty=${selectedItems.selectedFaculty}`;
    }
    if (selectedItems.selectedDepartment) {
      url = `${url}&department=${selectedItems.selectedDepartment}`;
    }
    if (searchQuery !== "") {
      if (url.includes("?")) {
        url = `${url}&search=${searchQuery}`;
      } else {
        url = `${url}?search=${searchQuery}`;
      }
    }

    if (typeOfBookCheckbox.length) {
      if (url.includes("?")) {
        url = `${url}&typeOfBook=${typeOfBookCheckbox.join(",")}`;
      } else {
        url = `${url}?typeOfBook=${typeOfBookCheckbox.join(",")}`;
      }
    }

    dispatch(fetchBooks(url));
  }, [selectedItems, searchQuery, typeOfBookCheckbox, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftMenu
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          setSearchQuery={setSearchQuery}
          typeOfBookCheckbox={typeOfBookCheckbox}
          setTypeOfBookCheckbox={setTypeOfBookCheckbox}
        />
      </Grid>
      <Grid item xs={9}>
        {books.status === "loading" && <Loading />}
        <Grid container spacing={2}>
          {books.status === "succeeded" &&
            books.data.map((book) => (
              <Grid key={book._id} item xs={3}>
                <Book book={book} />
              </Grid>
            ))}
        </Grid>
        {books.status === "succeeded" && books.data.length < 1 && (
          <DataNotFound message="Kitap bulunamadı" />
        )}

        {books.data.length > 0 && (
          <Pagination
            count={10}
            size="large"
            variant="outlined"
            color="primary"
            style={{
              marginTop: 100,
              marginBottom: 100,
              position: "relative",
              left: "25%",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Books;
