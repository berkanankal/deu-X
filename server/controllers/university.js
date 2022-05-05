const University = require("../models/University");
const asyncHandler = require("express-async-handler");

const addUniversity = asyncHandler(async (req, res) => {
  const university = await University.create(req.body);
  return res.status(201).json({
    success: "true",
    data: university,
  });
});

const getAllUniversities = asyncHandler(async (req, res) => {
  const universities = await University.find();
  return res.status(200).json({
    success: "true",
    data: universities,
  });
});

module.exports = { addUniversity, getAllUniversities };
