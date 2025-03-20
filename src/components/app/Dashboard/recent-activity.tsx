import { useEffect } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetExpense } from "../hooks/use-expense";
import DeleteExpenseAlert from "./delete-expense";
import { useExpenseStore } from "./set-expense";

export function RecentActivity() {
  const { expenses } = useExpenseStore();
  const { getExpense } = useGetExpense();

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <Card className="w-full  mt-3">
      <CardHeader>Recent Activity</CardHeader>
      <CardContent>
        <Table className="overflow-auto">
          <ScrollArea className="h-72 rounded-md border">
            <TableHeader className="text-center sticky top-0 bg-white">
              <TableRow>
                <TableHead>expense</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Split</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            {expenses.length ? (
              <TableBody>
                {expenses.map((expense, index) => (
                  <TableRow key={index}>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.paidBy}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.split}</TableCell>
                    <TableCell>
                      <DeleteExpenseAlert expenseId={expense._id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <div className="flex items-center justify-center h-44 text-gray-500 text-lg">
                No Expense
              </div>
            )}
          </ScrollArea>
        </Table>
      </CardContent>
    </Card>
  );
}
