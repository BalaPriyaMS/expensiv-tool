import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const SettlementSummaryCard = () => {
  return (
    <Card className="h-72 w-[740px] ">
      <CardHeader>Settlement Summary</CardHeader>
      <CardContent>
        <div className="bg-muted rounded-sm p-3 flex justify-between">
          <div className=" flex items-center gap-2">
            <p className="rounded-3xl bg-black h-10 w-10 p-4 text-white flex items-center justify-center">
              MS
            </p>
            <p className="flex flex-col  justify-center text-sm">
              <span>John owes David</span>
              <span className="text-[#6B7280]">Due By Apr 30</span>
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="flex items-center">
              <FaRupeeSign /> 100
            </p>
            <Button>Settle Up</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettlementSummaryCard;
