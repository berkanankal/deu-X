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

const getAllBooks = asyncHandler(async (req, res) => {
  let query = Book.find()
    .populate({
      path: "city",
      select: "name",
    })
    .populate({
      path: "university",
      select: "name",
    })
    .populate({
      path: "faculty",
      select: "name",
    })
    .populate({
      path: "department",
      select: "name",
    });

  if (req.query.search) {
    const regex = new RegExp(req.query.search, "i");

    query = query.where({ name: regex });
  }

  if (req.query.city) {
    query = query.where({ city: req.query.city });
  }

  if (req.query.university) {
    query = query.where({ university: req.query.university });
  }

  if (req.query.faculty) {
    query = query.where({ faculty: req.query.faculty });
  }

  if (req.query.department) {
    query = query.where({ department: req.query.department });
  }

  if (req.query.typeOfBook) {
    query = query.where({ typeOfBook: req.query.typeOfBook });
  }

  const books = await query;

  return res.status(200).json({
    success: true,
    data: books,
  });
});

module.exports = { addBook, getAllBooks };
