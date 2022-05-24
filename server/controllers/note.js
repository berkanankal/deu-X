const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");

const addNote = asyncHandler(async (req, res) => {
  const data = req.body;

  if (req.savedImage) {
    data.note_image = req.savedImage;
  }

  const response = await Note.create(data);

  const note = await Note.findOne({ _id: response._id })
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

  return res.status(201).json({
    success: true,
    data: note,
  });
});

const getAllNotes = asyncHandler(async (req, res) => {
  let query = Note.find()
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

  if (req.query.class) {
    query = query.where({ class: req.query.class.split(",") });
  }
  if (req.query.semester) {
    query = query.where({ semester: req.query.semester.split(",") });
  }

  const notes = await query;
  return res.status(200).json({
    success: true,
    data: notes,
  });
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)
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
    data: note,
  });
});

module.exports = {
  addNote,
  getAllNotes,
  getNoteById,
};
