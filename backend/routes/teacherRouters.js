import express from "express";
import { createTeacher, getAllTeachers, updateTeachers, deleteTeachers } from "../controllers/teacherController.js";

const router = express.Router();

router.post("/", createTeacher);

router.get("/", getAllTeachers);

router.put("/:id", updateTeachers);

router.delete("/:id", deleteTeachers);

export default router;
