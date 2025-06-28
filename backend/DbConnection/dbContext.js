import mongoose from "mongoose";
const uri = "mongodb+srv://abhijith:sn7WCc3PK8rtH3Xi@cluster0.it17lri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbContext = async () => {
  await mongoose

    .connect(uri)
    .then(() => console.log("Db connected success"))
    .catch((err) => console.log(err));
};

export default dbContext;
