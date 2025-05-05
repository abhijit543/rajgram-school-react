import { isValidObjectId } from "mongoose";
import student from "../models/studentSchema.js";
import teacher from "../models/teacherSchema.js";
const createStudent = async (req, res) => {
  try {
    const { teacherId, studentName } = req.body;
    if (!isValidObjectId(teacherId)) {
      return res.status(400).json({ code: 400, message: "It is not Valid Object ID" });
    }
    const isTeacherId = await teacher.findById(teacherId);
    if (!isTeacherId) {
      return res.status(404).json({ code: 404, message: "This teacher is not exist in teacher table" });
    }
    await student.create({ teacherId, studentName });
    return res.status(201).json({ code: 201, message: "students created successfully" });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};
const getAllStudent = async (req, res) => {
  try {
    const data = await student.find({}).populate("teacherId", "name");
    return res.status(200).json({ code: 200, message: data });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};
const updateAllstudent = async (req, res) => {
  try {
  } catch {}
};
const deleteAllstudent = async (req, res) => {
  try {
  } catch {}
};
export { createStudent, getAllStudent, updateAllstudent, deleteAllstudent };
