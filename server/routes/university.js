const express = require("express");
const {
  addUniversity,
  getAllUniversities,
} = require("../controllers/university");

const router = express.Router();

router.post("/", addUniversity);
router.get("/", getAllUniversities);

module.exports = router;
