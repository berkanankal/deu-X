const mongoose = require("mongoose");
const City = require("./City");

const { Schema } = mongoose;

const UniversitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
  ],
});

UniversitySchema.pre("save", async function (next) {
  if (!this.isModified("city")) {
    return next();
  }

  const city = await City.findById(this.city);
  city.universities.push(this._id);
  await city.save();
});

module.exports = mongoose.model("University", UniversitySchema);
