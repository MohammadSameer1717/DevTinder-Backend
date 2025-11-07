import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


// const express = require("express");

// const app = express();

// app.get(/a/ ,(req, res) => {
//   res.send({ firstName: "Mohammad", LastName: "Sameer" });
// });

// app.listen(7777, () =>{
//   console.log("Server is Successfully listening on port 7777...");
  
// });
