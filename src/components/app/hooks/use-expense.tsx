/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { z } from "zod";

export type Expense = {
  description: string;
  amount: number;
  paidBy: string;
  split: string;
  date: number;
  _id: number;
};

export type ExpenseFormData = z.infer<typeof expenseSchema>;

export const expenseSchema = z.object({
  description: z.string().min(1, "Expense name is required"),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Amount must be greater than zero")
  ),
  paidBy: z.string().min(1, "Expense name is required"),
  split: z.string().min(1, "Expense name is required"),
  date: z.date(),
});

export const AddNewExpense = async (data: ExpenseFormData) => {
  try {
    const expenseData = {
      ...data,
      date: new Date(data.date).toISOString(),
    };

    const response = await fetch("http://localhost:5000/api/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add expense: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Expense Submitted Successfully:", result);
    alert("Expense added successfully!");
  } catch (error) {
    console.error("Error submitting expense:", error);
    alert("Failed to add expense. Please try again.");
  }
};

export const useGetExpense = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const getExpense = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/expenses/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Failed to add expense: ${response.statusText}`);
      }

      const result = await response.json();
      setExpenses(result);
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };
  return { expenses, getExpense };
};
