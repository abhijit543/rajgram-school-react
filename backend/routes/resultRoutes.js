import express from "express";
import { createResult, getResults, updateResults, deleteResults } from "../controllers/resultController.js";
const router = express.Router();
router.post("/", createResult);

router.get("/", getResults);

router.put("/:id", updateResults);

router.delete("/:id", deleteResults);

export default router;
