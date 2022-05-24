const express = require("express");
const {
  addThing,
  getAllThings,
  getThingById,
} = require("../controllers/thing");
const imageUpload = require("../helpers/libraries/multer");

const router = express.Router();

router.post("/", imageUpload.single("thing_image"), addThing);
router.get("/", getAllThings);
router.get("/:id", getThingById);

module.exports = router;
