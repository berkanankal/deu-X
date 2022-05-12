const express = require("express");
const { addNote, getAllNotes, getNoteById } = require("../controllers/note");

const router = express.Router();

router.post("/", addNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

module.exports = router;
