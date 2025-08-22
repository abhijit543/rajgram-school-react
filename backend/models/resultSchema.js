import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  datayear: {
    students: { type: Number, required: true },
    appeared: { type: Number, required: true },
    passed: { type: Number, required: true },
    division: {
      first: { type: Number, required: true },
      second: { type: Number, required: true },
      pass: { type: Number },
    },
  },
});
const Result = mongoose.model("Result", resultSchema);
export default Result;
