import mongoose from "mongoose";
const DonationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  amount: Number,
  paymentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Donate = mongoose.model("Donation", DonationSchema);
export default Donate;
