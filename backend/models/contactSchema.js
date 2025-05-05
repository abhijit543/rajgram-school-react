import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  from_name: {
    type: String,
    required: true,
    trim: true,
  },
  from_email: {
    type: String,
    trim: true,
  },
  from_mobile: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  message_type: {
    type: String,
    enum: ["Admission", "Hostel", "Guest", "other"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
