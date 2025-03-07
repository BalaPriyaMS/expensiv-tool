const express = require("express");
const router = express.Router();
const Expense = require("../models/expense.model");

// ✅ GET all expenses
router.get("/get", async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.json(expenses);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// ✅ POST new expense
router.post("/add", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
