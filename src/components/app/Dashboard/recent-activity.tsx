import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const expenses = [
  {
    expense: "INV001",
    paidBy: "Paid",
    totalAmount: "$250.00",
    date: "Apr 30",
    split: "Equal Split",
  },
  {
    expense: "INV002",
    paidBy: "Pending",
    totalAmount: "$150.00",
    date: "Apr 30",
    split: "Equal Split",
  },
  {
    expense: "INV003",
    paidBy: "Unpaid",
    totalAmount: "$350.00",
    date: "Apr 30",
    split: "Equal Split",
  },
  {
    expense: "INV004",
    paidBy: "Paid",
    totalAmount: "$450.00",
    date: "Apr 30",
    split: "Equal Split",
  },
  {
    expense: "INV005",
    paidBy: "Paid",
    totalAmount: "$550.00",
    date: "Apr 30",
    split: "Equal Split",
  },
];

export function RecentActivity() {
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
            {expenses.map((expense) => (
              <TableRow key={expense.expense}>
                <TableCell className="font-medium">{expense.expense}</TableCell>
                <TableCell>{expense.totalAmount}</TableCell>
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
