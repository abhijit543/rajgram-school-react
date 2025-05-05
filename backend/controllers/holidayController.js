import Holiday from "../models/holidaySchema.js";
import { isValidObjectId } from "mongoose";
const createHoliday = async (req, res) => {
  try {
    const { date, name } = req.body;
    await Holiday.create({ date, name });
    return res.status(201).json({ code: 201, message: "created Successfully" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};

const getHolidayList = async (req, res) => {
  try {
    const data = await Holiday.find({});
    return res.status(201).json({ code: 201, message: data });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};

const updateHolidayList = async (req, res) => {
  try {
    const data = req.params.id;
    const updatedata = req.body;
    await Holiday.findByIdAndUpdate(data, updatedata);
    return res.status(201).json({ code: 201, message: "updated done" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};
const deleteHolidayList = async (req, res) => {
  try {
    const data = req.params.id;
    if (!isValidObjectId(data)) {
      return res.status(400).json({ code: 400, message: "It is not valid object id" });
    }
    await Holiday.findByIdAndDelete(data);
    return res.status(201).json({ code: 201, message: "updated done" });
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};
export { createHoliday, getHolidayList, updateHolidayList, deleteHolidayList };
