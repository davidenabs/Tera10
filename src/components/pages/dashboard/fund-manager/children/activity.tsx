import { useState } from "react";
import { Building2, DollarSign, Users, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Type definitions
type TimeFilter = "Today" | "1d" | "1w" | "6m" | "1yr";
type ActivityType = "project" | "investment" | "partnership";

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface ProgressItem {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

export default function ActivityDashboard() {
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilter>("Today");

  // Sample activities data
  const activities: Activity[] = [
    {
      id: 1,
      type: "project",
      title: "New Project Added",
      description: 'Added "Skyline Residences" to active projects portfolio',
      timestamp: "2 hours ago",
      icon: <Building2 className="text-blue-500" />,
    },
    {
      id: 2,
      type: "investment",
      title: "Investment Milestone",
      description: '$2M investment milestone reached for "Urban Heights"',
      timestamp: "2 hours ago",
      icon: <DollarSign className="text-green-500" />,
    },
    {
      id: 3,
      type: "partnership",
      title: "Developer Partnership",
      description: "New partnership established with MetroBuilders Corp",
      timestamp: "2 hours ago",
      icon: <Building2 className="text-blue-500" />,
    },
    {
      id: 4,
      type: "project",
      title: "New Project Added",
      description: 'Added "Skyline Residences" to active projects portfolio',
      timestamp: "2 hours ago",
      icon: <Users className="text-purple-500" />,
    },
    {
      id: 5,
      type: "project",
      title: "New Project Added",
      description: 'Added "Skyline Residences" to active projects portfolio',
      timestamp: "2 hours ago",
      icon: <PieChart className="text-yellow-500" />,
    },
    {
      id: 6,
      type: "project",
      title: "New Project Added",
      description: 'Added "Skyline Residences" to active projects portfolio',
      timestamp: "2 hours ago",
      icon: <Building2 className="text-blue-500" />,
    },
  ];

  // Overview data
  const progressItems: ProgressItem[] = [
    {
      label: "Active Projects",
      value: 24,
      maxValue: 30,
      color: "bg-blue-500",
    },
    {
      label: "Pending Approvals",
      value: 24,
      maxValue: 30,
      color: "bg-orange-500",
    },
    {
      label: "Completed Projects",
      value: 24,
      maxValue: 30,
      color: "bg-green-500",
    },
  ];

  // Time filter options
  const timeFilters: TimeFilter[] = ["Today", "1d", "1w", "6m", "1yr"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Activity Feed */}
      <Card className="col-span-3 border-gray-200 bg-white rounded-lg shadow-none overflow-hidden">
        <CardHeader className="p6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-base font-bold">Recent Activities</h2>

          {/* Time filter buttons */}
          <div className="flex rounded-full space-x-1 p-">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                  activeTimeFilter === filter
                    ? "bg-yellow-400 text-gray-900"
                    : "text-gray-700 hover:bg-gray-200 bg-gray-100 "
                }`}
                onClick={() => setActiveTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </CardHeader>

        {/* Activity List */}
        <CardContent className="divide-yp-0divide-gray-200">
          {activities.map((activity) => (
            <div key={activity.id} className="flex py-3 items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-700 text-sm">{activity.description}</p>
              </div>
              <div className="text-gray-500 text-sm">{activity.timestamp}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Activity Overview */}
      <div>
        <Card className="shadow-none bg-white rounded-lg border-gray-200 p-6">
          <h2 className="text-base font-semibold mb-6">Activity Overview</h2>

          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-2xl ${item.color}`}
                    style={{ width: `${(item.value / item.maxValue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
