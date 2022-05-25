const mongoose = require("mongoose");
const { Schema } = mongoose;

const HousemateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  details: {
    type: String,
    required: [true, "Details is required"],
  },
  rent: {
    type: Number,
    required: [true, "Rent is required"],
  },
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
  cigarette: {
    type: Boolean,
    default: false,
  },
  alcohol: {
    type: Boolean,
    default: false,
  },
  vegetarian: {
    type: Boolean,
    default: false,
  },
  vegan: {
    type: Boolean,
    default: false,
  },
  child: {
    type: Boolean,
    default: false,
  },
  pet: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Housemate", HousemateSchema);
