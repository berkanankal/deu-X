const mongoose = require("mongoose");

const { Schema } = mongoose;

const FacultySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  department: [
    {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
  ],
});

module.exports = mongoose.model("Faculty", FacultySchema);
