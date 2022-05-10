const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
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
  typeOfBook: {
    type: String,
    required: [true, "Type of book is required"],
    enum: ["roman", "ders"],
  },
});

module.exports = mongoose.model("Book", BookSchema);
