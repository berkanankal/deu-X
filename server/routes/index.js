const express = require("express");
const auth = require("./auth");
const questions = require("./questions");
const city = require("./city");

const router = express.Router();

router.use("/auth", auth);
router.use("/questions", questions);
router.use("/city", city);

module.exports = router;
