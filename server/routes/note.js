const express = require("express");
const { addNote, getAllNotes } = require("../controllers/note");

const router = express.Router();

router.post("/", addNote);
router.get("/", getAllNotes);

module.exports = router;
