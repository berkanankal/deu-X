const express = require("express");
const { addFaculty, getAllFaculties } = require("../controllers/faculty");

const router = express.Router();

router.post("/", addFaculty);
router.get("/", getAllFaculties);

module.exports = router;
