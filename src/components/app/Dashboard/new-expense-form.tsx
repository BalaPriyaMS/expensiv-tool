import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

// Define Zod Schema for Validation
const expenseSchema = z.object({
  description: z.string().min(1, "Expense name is required"),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Amount must be greater than zero")
  ),
  paidBy: z.string().min(1, "Expense name is required"),
  split: z.string().min(1, "Expense name is required"),
  date: z.date(),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

const ExpenseForm = () => {
  const form = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      description: "",
      amount: 0,
      paidBy: "",
      split: "",
      date: new Date(),
    },
  });

  const onSubmit = async (data: ExpenseFormData) => {
    try {
      const expenseData = {
        ...data,
        date: new Date(data.date).toISOString(), // Ensure correct date format
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

  return (
    <Card className="max-w-full m-4">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Expense Name Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amount Field */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paidBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PaidBy</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PaidBy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="split"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Split</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter split" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {field.value
                            ? format(field.value, "PPP")
                            : "Pick a date"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Add Expense
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
