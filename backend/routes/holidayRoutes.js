import express from "express";
import { createHoliday, getHolidayList, updateHolidayList, deleteHolidayList } from "../controllers/holidayController.js";
const router = express.Router();
router.post("/", createHoliday);
router.get("/", getHolidayList);
router.put("/:id", updateHolidayList);
router.delete("/:id", deleteHolidayList);
export default router;
