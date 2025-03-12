require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expenseRoutes = require("./routes/expense.routes");
const authRoutes = require("./routes/auth.routes");
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // To parse JSON data

// Routes
app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.error(err));
