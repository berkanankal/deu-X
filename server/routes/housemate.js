const express = require("express");
const {
  addHousemate,
  getAllHousemates,
  getHousemateById,
} = require("../controllers/housemate");

const router = express.Router();

router.post("/", addHousemate);
router.get("/", getAllHousemates);
router.get("/:id", getHousemateById);

module.exports = router;
