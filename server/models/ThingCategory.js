const mongoose = require("mongoose");
const { Schema } = mongoose;

const ThingCategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

module.exports = mongoose.model("ThingCategory", ThingCategorySchema);
