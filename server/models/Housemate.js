const mongoose = require("mongoose");
const { Schema } = mongoose;

const HousemateSchema = new Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  university: {
    type: Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "Faculty",
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  image: {
    type: String,
    default: "default.jpg",
  },
  typeOfHousemate: {
    type: String,
    enum: ["1", "2"],
    default: "1",
    // 1: kalacak ev arıyorum
    // 2: evime arkadaş arıyorum
  },
});

module.exports = mongoose.model("Housemate", HousemateSchema);
