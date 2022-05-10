const express = require("express");
const { addBook, getAllBooks } = require("../controllers/book");

const router = express.Router();

router.post("/", addBook);
router.get("/", getAllBooks);

module.exports = router;
