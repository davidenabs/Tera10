import usePageTitle from "@/hooks/use-page-title";
import { Box, DocumentText, Wallet, Watch } from "iconsax-react";
import { StatCard } from "../developer/children/stat-card";
import ActivityDashboard from "./children/activity";

const stats = [
  {
    title: "Active Projects",
    value: 24,
    icon: <DocumentText size={18} color="#000" />,
    change: {
      value: "8",
      isPositive: true,
    },
  },
  {
    title: "Total Investment",
    value: 12.4,
    currency: "NGN",
    icon: <Wallet size={18} color="#000" />,
    change: {
      value: "8",
      isPositive: true,
    },
  },
  {
    title: "Investor",
    value: 1284,
    icon: <Box size={18} color="#000" />,
    change: {
      value: "2",
      isPositive: false,
    },
  },
  {
    title: "Success Rate",
    value: 1284,
    icon: <Watch size={18} color="#000" />,
    change: {
      value: "18",
      isPositive: true,
    },
  },
];

const ManageDashboardPage = () => {
  usePageTitle("Fund Manager");

  return (
    <>
      {/* Dashboard Content */}
      <div className=" flex-1 ">
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb4">Stats</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                currency={stat.currency}
                change={stat.change}
              />
            ))}
          </div>
          <ActivityDashboard />
        </div>
      </div>
    </>
  );
};

export default ManageDashboardPage;
