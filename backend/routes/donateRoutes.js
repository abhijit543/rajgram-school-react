// routes/donateRoutes.js
import express from "express";
import { createOrder, saveDonation, getDonations } from "../controllers/donateController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/save-donation", saveDonation);
router.get("/get-donation", getDonations);

export default router;
