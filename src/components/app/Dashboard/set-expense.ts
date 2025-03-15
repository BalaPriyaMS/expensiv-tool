import { create } from "zustand";
import { Expense } from "../hooks/use-expense";

type ExpenseStore = {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
};
export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  setExpenses: (expenses) => set({ expenses }),
}));
