const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Questions home");
});
router.get("/delete", (req, res, next) => {
  res.send("Questions delete");
});

module.exports = router;
