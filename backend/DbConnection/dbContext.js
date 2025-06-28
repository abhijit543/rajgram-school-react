import mongoose from "mongoose";

const dbContext = async () => {
  await mongoose
    // .connect("mongodb://localhost:27017/RKM")
    .connect("mongodb+srv://mondalabhijit577:<mondalabhijit577>@cluster0.it17lri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Db connected success"))
    .catch((err) => console.log(err));
};

export default dbContext;
