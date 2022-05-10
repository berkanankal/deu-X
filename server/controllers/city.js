const City = require("../models/City");
const asyncHandler = require("express-async-handler");

const getAllCities = asyncHandler(async (req, res) => {
  const cities = await City.find().populate({
    path: "universities",
    populate: {
      path: "faculties",
      populate: {
        path: "departments",
      },
    },
  });

  return res.status(200).json({
    success: "true",
    data: cities,
  });
});

const addCity = asyncHandler(async (req, res) => {
  const city = await City.create(req.body);
  return res.status(201).json({
    success: "true",
    data: city,
  });
});

module.exports = { getAllCities, addCity };
