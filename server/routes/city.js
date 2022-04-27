const express = require("express");
const { getAllCities } = require("../controllers/city");

const router = express.Router();

router.get("/", getAllCities);

module.exports = router;
