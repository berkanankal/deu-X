const mongoose = require("mongoose");

const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

module.exports = mongoose.model("Department", DepartmentSchema);
