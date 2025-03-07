import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

type Expense = {
  description: string;
  amount: number;
  paidBy: string;
  split: string;
  date: number;
};

export function RecentActivity() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const handleGet = async () => {
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
      // alert("Expense added successfully!");
    } catch (error) {
      console.error("Error submitting expense:", error);
      // alert("Failed to add expense. Please try again.");
    }
  };
  useEffect(() => {
    handleGet();
  }, []);

  return (
    <Card className="w-[94%] ml-12 mt-3 ">
      <CardHeader>Recent Activity</CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="text-center">
            <TableRow>
              <TableHead>expense</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Paid By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Split</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {expense.description}
                </TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.paidBy}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.split}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
