import { isValidObjectId } from "mongoose";
import Result from "../models/resultSchema.js";

const createResult = async (req, res) => {
  try {
    const { year, datayear } = req.body;
    await Result.create({ year, datayear });
    return res.status(201).json({ code: 201, message: "result created successfully" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};
const getResults = async (req, res) => {
  try {
    const data = await Result.find().sort({ year: -1 });
    return res.status(200).json({ code: 200, message: data });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};
const updateResults = async (req, res) => {
  try {
    const data = req.params.id;
    const updatedata = req.body;
    await Result.findByIDAndUpdate(data, updatedata);
    return res.status(200).json({ code: 200, message: "updated done" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};
const deleteResults = async (req, res) => {
  try {
    const data = req.params.id;
    if (!isValidObjectId(data)) {
      return res.status(400).json({ code: 400, message: "It is not valid object id" });
    }
    await Result.findByIDAndDelete(data);
    return res.status(200).json({ code: 200, message: "deleted done" });
  } catch (err) {
    return res.status(500).json({ code: 500, messgae: err.message });
  }
};
export { createResult, getResults, updateResults, deleteResults };
