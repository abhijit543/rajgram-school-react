import { isValidObjectId } from "mongoose";
import teacherSchema from "../models/teacherSchema.js";

const createTeacher = async (req, res) => {
  try {
    const { name, joinedDate, qualification } = req.body;
    await teacherSchema.create({ name, joinedDate, qualification });
    return res.status(201).json({ code: 201, message: "Created successfully" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const data = await teacherSchema.find({});
    return res.status(200).json({ code: 200, message: data });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};

const updateTeachers = async (req, res) => {
  try {
    const data = req.params.id;
    const updateData = req.body;
    await teacherSchema.findByIdAndUpdate(data, updateData);
    return res.status(200).json({ code: 200, message: "updated done" });
  } catch (err) {
    return res.status(500).json({ code: 500, messgae: err.message });
  }
};
const deleteTeachers = async (req, res) => {
  try {
    const data = req.params.id;
    if (!isValidObjectId(data)) {
      return res.status(400).json({ code: 400, message: "It is not valid object id" });
    }
    await teacherSchema.findByIdAndDelete(data);
    return res.status(200).json({ code: 200, message: "deleted done" });
  } catch (err) {
    return res.status(500).json({ code: 500, messgae: err.message });
  }
};
export { createTeacher, getAllTeachers, updateTeachers, deleteTeachers };
