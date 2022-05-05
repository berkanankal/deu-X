const Department = require("../models/Department");
const asyncHandler = require("express-async-handler");

const addDepartment = asyncHandler(async (req, res) => {
  const department = await Department.create(req.body);
  return res.status(201).json({
    success: "true",
    data: department,
  });
});

const getAllDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.find();
  return res.status(200).json({
    success: "true",
    data: departments,
  });
});

module.exports = { addDepartment, getAllDepartments };
