const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
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
  note_image: {
    type: String,
    default: "default.jpg",
  },
  class: {
    type: String,
    required: [true, "Class is required"],
    enum: ["1", "2", "3", "4"],
  },
  semester: {
    type: String,
    required: [true, "Semester is required"],
    enum: ["guz", "bahar"],
  },
});

module.exports = mongoose.model("Note", NoteSchema);
