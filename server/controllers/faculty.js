const Faculty = require("../models/Faculty");
const asyncHandler = require("express-async-handler");

const addFaculty = asyncHandler(async (req, res) => {
  const faculty = await Faculty.create(req.body);
  return res.status(201).json({
    success: "true",
    data: faculty,
  });
});

const getAllFaculties = async (req, res) => {
  const faculties = await Faculty.find();
  return res.status(200).json({
    success: "true",
    data: faculties,
  });
};

module.exports = { addFaculty, getAllFaculties };
