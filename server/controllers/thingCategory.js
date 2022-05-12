const ThingCategory = require("../models/ThingCategory");
const asyncHandler = require("express-async-handler");

const addThingCategory = asyncHandler(async (req, res) => {
  const data = req.body;
  const thingCategory = await ThingCategory.create(data);
  res.status(201).json({
    success: true,
    data: thingCategory,
  });
});

const getAllThingCategories = asyncHandler(async (req, res) => {
  const thingCategories = await ThingCategory.find();
  res.status(200).json({
    success: true,
    data: thingCategories,
  });
});

module.exports = { addThingCategory, getAllThingCategories };
