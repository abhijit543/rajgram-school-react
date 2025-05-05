import express from "express";
import { createStudent, getAllStudent, updateAllstudent, deleteAllstudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudent);
router.put("/:id", updateAllstudent);
router.delete("/:id", deleteAllstudent);

export default router;
