const express = require("express");
const {
  addThing,
  getAllThings,
  getThingById,
} = require("../controllers/thing");

const router = express.Router();

router.post("/", addThing);
router.get("/", getAllThings);
router.get("/:id", getThingById);

module.exports = router;
