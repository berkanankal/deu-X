const express = require("express");
const { addBook, getAllBooks, getBookById } = require("../controllers/book");

const router = express.Router();

router.post("/", addBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

module.exports = router;
