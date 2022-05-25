const Housemate = require("../models/Housemate");
const asyncHandler = require("express-async-handler");

const addHousemate = asyncHandler(async (req, res) => {
  const data = req.body;
  const response = await Housemate.create(data);

  const housemate = await Housemate.findOne({ _id: response._id })
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
    data: housemate,
  });
});

const getAllHousemates = asyncHandler(async (req, res) => {
  let query = Housemate.find()
    .populate({
      path: "user",
      select: "name",
    })
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

  if (req.query.typeOfHousemate) {
    query = query.where({ typeOfHousemate: req.query.typeOfHousemate });
  }

  const housemates = await query;

  return res.status(200).json({
    success: true,
    data: housemates,
  });
});

const getHousemateById = asyncHandler(async (req, res) => {
  const housemate = await Housemate.findById(req.params.id)
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
    data: housemate,
  });
});

module.exports = { addHousemate, getAllHousemates, getHousemateById };
