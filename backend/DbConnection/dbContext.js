import mongoose from "mongoose";

const uri = "mongodb+srv://abhijith:sn7WCc3PK8rtH3Xi@cluster0.it17lri.mongodb.net/RKM?retryWrites=true&w=majority";

const dbContext = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

export default dbContext;
