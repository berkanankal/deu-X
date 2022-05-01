const mongoose = require("mongoose");

const { Schema } = mongoose;

const DistrictSchema = new Schema({
  name: {
    type: String,
    required: [true, "District name is required"],
  },
});

module.exports = mongoose.model("District", DistrictSchema);
