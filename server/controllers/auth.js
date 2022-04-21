const User = require("../models/User");

const register = async (req, res, next) => {
  try {
    const data = req.body;

    const user = await User.create(data);

    res.status(201).json({
      success: "true",
      data: user,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { register };
