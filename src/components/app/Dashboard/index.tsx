import { FaRupeeSign } from "react-icons/fa";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Chart from "./chart";
import ExpenseForm from "./new-expense-form";
import { RecentActivity } from "./recent-activity";
import SettlementSummaryCard from "./settlement-summary-card";

const expenseDetails = [
  {
    heading: "Total Group Expenses",
    money: 100,
    details: "Last updated today",
    icon: <FaRupeeSign />,
  },
  {
    heading: "your Balance",
    money: 100,
    details: "you are owed",
    icon: <Icons.purse />,
  },
  {
    heading: "This Month's Spending",
    money: 100,
    details: "20% less than last month",
    icon: <Icons.graph />,
  },
];
const settings = [
  {
    title: "Generated Report",
    icon: <Icons.purse />,
  },
  {
    title: "Split Bill",
    icon: <Icons.purse />,
  },
  {
    title: "View History",
    icon: <Icons.purse />,
  },
  {
    title: "Group Settings",
    icon: <Icons.purse />,
  },
];
const Dashboard = () => {
  return (
    <div className="h-screen rounded-sm w-full py-4 px-4 bg-muted ml-[-40px]">
      <div className="flex items-center justify-between">
        <h1 className="font-normal text-xl">Dashboard</h1>
        <div className="flex gap-10">
          <ExpenseForm />
          <p>profile</p>
        </div>
      </div>
      <div className="flex  mt-3 items-center justify-evenly">
        {expenseDetails.map((item) => (
          <Card className="w-[488px] h-28 rounded-sm " key={item.heading}>
            <CardContent className="flex flex-col justify-center mt-4 py-1 gap-1 text-[#6B7280] text-sm">
              <p className="flex  justify-between items-center ">
                {item.heading} <span className="text-black">{item.icon}</span>
              </p>
              <p className="text-2xl text-black flex items-center">
                <FaRupeeSign />
                {item.money}
              </p>
              <p> {item.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex gap-5 mt-3 items-center justify-evenly">
        <Card className="h-72 w-[750px]">
          <CardHeader>Member Contributions</CardHeader>
          <Chart />
        </Card>
        <SettlementSummaryCard />
      </div>
      <RecentActivity />
      <div className="flex mt-3 justify-evenly items-center">
        {settings.map((item) => (
          <Button
            className="h-14 w-80 rounded-lg "
            variant="outline"
            key={item.title}
          >
            <span>{item.icon}</span>
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
