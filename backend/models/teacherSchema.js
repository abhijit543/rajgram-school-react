import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String },
  joinedDate: { type: String },
  qualification: { type: String },
});

const teacher = mongoose.model("teacher", teacherSchema);

export default teacher;
