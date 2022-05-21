const Thing = require("../models/Thing");
const asyncHandler = require("express-async-handler");

const addThing = asyncHandler(async (req, res) => {
  const data = req.body;
  const response = await Thing.create(data);

  const thing = await Thing.findOne({ _id: response._id })
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
    })
    .populate({
      path: "category",
      select: "name",
    });

  res.status(201).json({
    success: true,
    data: thing,
  });
});

const getAllThings = asyncHandler(async (req, res) => {
  let query = Thing.find()
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
    })
    .populate({
      path: "category",
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

  if (req.query.category) {
    query = query.where({ category: req.query.category });
  }

  const things = await query;

  return res.status(200).json({
    success: true,
    data: things,
  });
});

const getThingById = asyncHandler(async (req, res) => {
  const thing = await Thing.findById(req.params.id)
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
    })
    .populate({
      path: "category",
      select: "name",
    });

  return res.status(200).json({
    success: true,
    data: thing,
  });
});

module.exports = { addThing, getAllThings, getThingById };
