const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");

const addBook = asyncHandler(async (req, res) => {
  const data = req.body;
  const response = await Book.create(data);

  const book = await Book.findOne({ _id: response._id })
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
    query = query.where({ typeOfBook: req.query.typeOfBook.split(",") });
  }

  const books = await query;

  return res.status(200).json({
    success: true,
    data: books,
  });
});

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)
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

  return res.status(200).json({
    success: true,
    data: book,
  });
});

module.exports = { addBook, getAllBooks, getBookById };
