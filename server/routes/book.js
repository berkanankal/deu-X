const express = require("express");
const { addBook } = require("../controllers/book");

const router = express.Router();

router.post("/", addBook);

module.exports = router;
