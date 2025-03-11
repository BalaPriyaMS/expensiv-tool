/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { z } from "zod";
import { useExpenseStore } from "../Dashboard/set-expense";

export type Expense = {
  description: string;
  amount: number;
  paidBy: string;
  split: string;
  date: number;
  _id: string;
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

export const useGetExpense = () => {
  // const [expenses, setExpenses] = useState<Expense[]>([]);
  const { setExpenses } = useExpenseStore();

  const getExpense = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/expenses/get"
      );

      setExpenses(response.data);
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };

  const AddNewExpense = async (data: ExpenseFormData) => {
    try {
      const expenseData = {
        ...data,
        date: new Date(data.date).toISOString(),
      };

      const response = await axios.post(
        "http://localhost:5000/api/expenses/add",
        expenseData
      );
      await getExpense();
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };

  const deleteExpense = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/delete?id=${id}`);
      await getExpense();
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };

  return { getExpense, deleteExpense, AddNewExpense };
};
