const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  paidBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
  split: { type: String, default: "Equal" },
});

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
