import { Button } from "@/components/ui/button";
import usePageTitle from "@/hooks/use-page-title";
import { Box, DocumentCopy, DocumentText, Star, Wallet } from "iconsax-react";
import { StatCard } from "./children/stat-card";
import DashboardPropertyTable from "./children/dashboard-propety-table";
import { ROUTES } from "@/config/route";
// import { useNavigation } from "@/utils/navigation";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Available Listing",
    value: 0,
    icon: <DocumentText size={18} color="#000" />,
  },
  {
    title: "Portfolio Balance",
    value: 0,
    currency: "NGN",
    icon: <Wallet size={18} color="#000" />,
  },
  {
    title: "Units Sold",
    value: 0,
    icon: <Box size={18} color="#000" />,
  },
  {
    title: "Pending Milestone Approvals",
    value: 0,
    icon: <Star size={18} color="#000" />,
  },
];

const DeveloperDashboardPage = () => {
  usePageTitle("Developer’s Dashboard");
  // const { goTo } = useNavigation();

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button variant="outline" className="gap-2 text-[#475467] rounded-full">
          <DocumentCopy size={20} color="#475467" />
          <span>Drafts</span>
        </Button>

        <Link
          to={ROUTES.DASHBOARD.DEVELOPER.ADD_ASSETS}
          className="!border-[#EBA10E] bg-yellow-400 border rounded-full text-black p-2 px-2 text-sm"
        >
          Add New
        </Link>
      </div>

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
              />
            ))}
          </div>
          <div className="lg:grid grid-cols-4 gap-4">
            <DashboardPropertyTable />
            {/* Promo Banner */}
            <div>
              <div className="w-80 md:w-full bg-gray-900 h-[595px] rounded-lg overflow-hidden relative lg:flex flex-col hidden">
                <div className="flex-1 p-6 pt-64 flex flex-col justify-end text-white">
                  <h3 className="text-4xl font-normal mb-2">
                    Unlock Your Project's Potential with Tera10!
                  </h3>
                  <Button className="mt-4 rounded-full text-black self-start">
                    List an asset
                  </Button>
                </div>
                <div className="absolute top-0 right-0 left-0 h-64 bg-gradient-to-b from-black/20 to-transparent">
                  {/* <img
              src="/api/placeholder/320/240"
              alt="Developer with building models"
              className="w-full h-full object-cover object-center"
            /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperDashboardPage;
