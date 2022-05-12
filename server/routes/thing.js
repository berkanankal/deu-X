const express = require("express");
const { addThing, getAllThings } = require("../controllers/thing");

const router = express.Router();

router.post("/", addThing);
router.get("/", getAllThings);

module.exports = router;
