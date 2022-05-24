const express = require("express");
const { addBook, getAllBooks, getBookById } = require("../controllers/book");
const imageUpload = require("../helpers/libraries/multer");

const router = express.Router();

router.post("/", imageUpload.single("book_image"), addBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

module.exports = router;
