import express from "express";
import cors from "cors";
import dbContext from "./DbConnection/dbContext.js";
import teacherRoutes from "./routes/teacherRouters.js";

import holidayRoutes from "./routes/holidayRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import donateRoutes from "./routes/donateRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

const app = express();

dbContext();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ code: 200, message: "My api is working" });
});

app.use("/api/v1/teacher", teacherRoutes);

app.use("/api/v1/holiday", holidayRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/donate", donateRoutes);
app.use("/api/v1/result", resultRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
