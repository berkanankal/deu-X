const express = require("express");
const {
  addThingCategory,
  getAllThingCategories,
} = require("../controllers/thingCategory");

const router = express.Router();

router.post("/", addThingCategory);
router.get("/", getAllThingCategories);

module.exports = router;
