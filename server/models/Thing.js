const mongoose = require("mongoose");
const { Schema } = mongoose;

const ThingSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
  category: {
    type: Schema.Types.ObjectId,
    ref: "ThingCategory",
    required: true,
  },
});

module.exports = mongoose.model("Thing", ThingSchema);
