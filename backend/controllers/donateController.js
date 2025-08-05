import Donate from "../models/donateSchema.js";
import Razorpay from "razorpay";
const razorpay = new Razorpay({
  key_id: "rzp_test_f99qB9EJhb6jEX",
  key_secret: "xtvOVo21Uc9FTkYFFvLOwHcY",
});

export const createOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paisa
      currency: "INR",
      receipt: "donation_" + Date.now(),
    });
    res.status(200).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ message: "Failed to create Razorpay order" });
  }
};

export const saveDonation = async (req, res) => {
  const { name, email, mobile, amount, paymentId } = req.body;
  try {
    const donation = new Donate({
      name,
      email,
      mobile,
      amount,
      paymentId,
    });
    await donation.save();
    res.status(201).json({ message: "Donation saved successfully" });
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).json({ message: "Failed to save donation" });
  }
};
export const getDonations = async (req, res) => {
  try {
    const donations = await Donate.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ message: "Failed to fetch donations" });
  }
};
