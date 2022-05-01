const express = require("express");
const { register, deleteAllUsers } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.get("/deleteall", deleteAllUsers);

module.exports = router;
