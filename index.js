// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/congif/connectDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js" 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Hello from DevTinder Backend 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
