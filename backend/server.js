import express from "express";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
connectDB();

const app = express();


app.use(express.json());


app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});