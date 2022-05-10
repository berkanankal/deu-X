const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");

const addBook = asyncHandler(async (req, res) => {
  const data = req.body;
  const book = await Book.create(data);
  res.status(201).json({
    success: true,
    data: book,
  });
});

module.exports = { addBook };
