const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");

const addNote = asyncHandler(async (req, res) => {
  const data = req.body;

  const note = await Note.create(data);

  return res.status(201).json({
    success: true,
    data: note,
  });
});

const getAllNotes = asyncHandler(async (req, res) => {
  let query = Note.find();

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

  const notes = await query;
  return res.status(200).json({
    success: true,
    data: notes,
  });
});

module.exports = {
  addNote,
  getAllNotes,
};
