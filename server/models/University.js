const mongoose = require("mongoose");

const { Schema } = mongoose;

const UniversitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  faculty: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
      required: [true, "Faculty is required"],
    },
  ],
});

module.exports = mongoose.model("University", UniversitySchema);
