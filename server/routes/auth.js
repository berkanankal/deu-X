const express = require("express");
const {
  register,
  login,
  deleteAllUsers,
  getUser,
} = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", getAccessToRoute, getUser);
router.get("/deleteall", deleteAllUsers);

module.exports = router;
