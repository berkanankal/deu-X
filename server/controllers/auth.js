const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const bcrypt = require("bcryptjs");

const register = asyncHandler(async (req, res, next) => {
  const data = req.body;

  const user = await User.create(data);

  return res.status(201).json({
    success: "true",
    data: user,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!(user && bcrypt.compareSync(password, user.password))) {
    return next(new CustomError("Please check your credentials", 400));
  }

  const token = user.getTokensFromUserModel();

  const { COOKIE_EXPIRE, NODE_ENV } = process.env;

  return (
    res
      .status(200)
      // .cookie("access_token", `Bearer: ${token}`, {
      //   expires: new Date(Date.now() + parseInt(COOKIE_EXPIRE) * 1000 * 60),
      //   httpOnly: true,
      //   secure: NODE_ENV === "production",
      // })
      .json({
        success: "true",
        user: {
          id: user._id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          role: user.role,
        },
        access_token: `Bearer: ${token}`,
      })
  );
});

const getUser = (req, res) => {
  return res.status(200).json({
    success: "true",
    user: req.user,
  });
};

const deleteAllUsers = async (req, res) => {
  await User.deleteMany();

  return res.status(200).json({
    message: "All users deleted",
  });
};

module.exports = { register, login, getUser, deleteAllUsers };
