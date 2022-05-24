const express = require("express");
const { addNote, getAllNotes, getNoteById } = require("../controllers/note");
const imageUpload = require("../helpers/libraries/multer");

const router = express.Router();

router.post("/", imageUpload.single("note_image"), addNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

module.exports = router;
