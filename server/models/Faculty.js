const mongoose = require("mongoose");
const University = require("./University");

const { Schema } = mongoose;

const FacultySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  university: {
    type: Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },
  departments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
  ],
});

FacultySchema.pre("save", async function (next) {
  if (!this.isModified("university")) {
    return next();
  }
  const university = await University.findById(this.university);
  university.faculties.push(this._id);
  await university.save();
});

module.exports = mongoose.model("Faculty", FacultySchema);
