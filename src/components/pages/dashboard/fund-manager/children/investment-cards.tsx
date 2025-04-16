import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BuildingIcon, ChartBarIcon } from "lucide-react";

interface InvestmentProps {
  name: string;
  company: string;
  target: string;
  submittedDate: string;
  investmentType: string;
  industry: string;
  stage: string;
}

const InvestmentCard: React.FC<InvestmentProps> = ({
  name,
  company,
  target,
  submittedDate,
  investmentType,
  industry,
  stage,
}) => {
  return (
    <Card className="mb-6 border border-gray-200 bg-white rounded-lg shadow-none overflow-hidden">
      <CardHeader className="p- pb- flex flex-row justify-between items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="bg-yellow-50 text-yellow-800 border-none rounded-full px-3 py-1"
            >
              Pending Review
            </Badge>
            <span className="text-sm text-gray-500">
              Submitted: {submittedDate}
            </span>
          </div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <BuildingIcon className="w-4 h-4" />
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChartBarIcon className="w-4 h-4" />
              <span>{target}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-red-50 hover:bg-red-100 text-red-500 borderred-200 border-none font-normal"
          >
            Reject
          </Button>
          <Button className=" text-black font-normal">Approve</Button>
        </div>
      </CardHeader>
      <CardContent className="p- pt-">
        <div className="h-px w-full bg-gray-200"></div>
        <div className="grid grid-cols-3 gap-8 mt-4 pb-2 border- border-gray-200 bg-white rounded-lg shadow-none overflow-hidden pt-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Investment Type</p>
            <p>{investmentType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Industry</p>
            <p>{industry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Investment Stage</p>
            <p>{stage}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
