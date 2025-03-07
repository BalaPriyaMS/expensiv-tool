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

export function RecentActivity() {
  const { expenses, getExpense } = useGetExpense();
  useEffect(() => {
    getExpense();
  }, [getExpense]);

  return (
    <Card className="w-[94%] ml-12 mt-3">
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
          </ScrollArea>
        </Table>
      </CardContent>
    </Card>
  );
}
