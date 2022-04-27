const mongoose = require("mongoose");

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, "City name is required"],
  },
});

module.exports = mongoose.model("City", CitySchema);
