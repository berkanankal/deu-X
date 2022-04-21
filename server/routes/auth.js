const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth home");
});
router.get("/register", (req, res) => {
  res.send("Auth register");
});

module.exports = router;
