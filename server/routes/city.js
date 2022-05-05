const express = require("express");
const { getAllCities, addCity } = require("../controllers/city");

const router = express.Router();

router.get("/", getAllCities);
router.post("/", addCity);

module.exports = router;
