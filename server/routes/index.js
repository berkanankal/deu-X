const express = require("express");
const auth = require("./auth");
const city = require("./city");
const university = require("./university");
const faculty = require("./faculty");
const department = require("./department");
const note = require("./note");
const book = require("./book");

const router = express.Router();

router.use("/auth", auth);
router.use("/city", city);
router.use("/university", university);
router.use("/faculty", faculty);
router.use("/department", department);
router.use("/note", note);
router.use("/book", book);

module.exports = router;
