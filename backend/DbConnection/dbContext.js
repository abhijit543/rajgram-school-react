import mongoose from "mongoose";

const dbContext = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/RKM")
    .then(() => console.log("Db connected success"))
    .catch((err) => console.log(err));
};

export default dbContext;
