import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "teacher" },
  studentName: { type: String },
});

const student = mongoose.model("student", studentSchema);
export default student;
