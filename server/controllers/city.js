const City = require("../models/City");
const asyncHandler = require("express-async-handler");

const getAllCities = asyncHandler(async (req, res) => {
  const cities = await City.find();

  return res.status(200).json({
    success: "true",
    data: cities,
  });
});

module.exports = { getAllCities };
