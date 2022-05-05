const express = require("express");
const {
  addDepartment,
  getAllDepartments,
} = require("../controllers/department");

const router = express.Router();

router.post("/", addDepartment);
router.get("/", getAllDepartments);

module.exports = router;
