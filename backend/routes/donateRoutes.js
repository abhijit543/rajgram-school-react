// routes/donateRoutes.js
import express from "express";
import { createOrder, saveDonation } from "../controllers/donateController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/save-donation", saveDonation);

export default router;
