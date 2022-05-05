const mongoose = require("mongoose");
const Faculty = require("./Faculty");

const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "Faculty",
    required: true,
  },
});

DepartmentSchema.pre("save", async function () {
  const faculty = await Faculty.findById(this.faculty);
  faculty.departments.push(this._id);
  await faculty.save();
});

module.exports = mongoose.model("Department", DepartmentSchema);
