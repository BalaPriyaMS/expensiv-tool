const express = require("express");
const router = express.Router();
const Expense = require("../models/expense.model");

//  GET all expenses
router.get("/get", async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.json(expenses);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// POST new expense
router.post("/add", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete expense
router.delete("/delete", async (req, res) => {
  const itemID = req.query.id;

  if (!itemID) {
    return res.status(400).json({ error: "ID not provided" });
  }

  try {
    const deletedExpense = await Expense.deleteOne({ _id: itemID });

    if (deletedExpense.deletedCount === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    return res
      .status(200)
      .json({ message: "Expense deleted successfully", id: itemID });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
