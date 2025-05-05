import mongoose from "mongoose";
const holidaySchema = new mongoose.Schema({
  date: { type: String },
  name: { type: String },
});
const Holiday = mongoose.model("holidays", holidaySchema);
export default Holiday;
