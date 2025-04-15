import usePageTitle from "@/hooks/use-page-title";
import { DocumentText, Receipt1, Wallet, Watch } from "iconsax-react";
import { StatCard } from "./children/stat-card";
import { Button } from "@/components/ui/button";
import AssetsTable from "./children/assets-table";

const stats = [
  {
    title: "Available Listing",
    value: 24,
    icon: <DocumentText size={18} color="#000" />,
  },
  {
    title: "Approved",
    value: 0,
    currency: "NGN",
    icon: <Wallet size={18} color="#000" />,
  },
  {
    title: "Pending",
    value: 4,
    icon: <Receipt1 size={18} color="#000" />,
  },
  {
    title: "Flagged",
    value: 5,
    icon: <Watch size={18} color="#000" />,
  },
];

const ListingPage = () => {
  usePageTitle("Listings");

  return (
    <>
      {/* Dashboard Content */}
      <div className=" flex-1 ">
        <div className="space-y-6">
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
            <AssetsTable />
            {/* Promo Banner */}
            <div className="w-80 md:w-full bg-gray-900 h-[595px] rounded-lg overflow-hidden relative lg:flex flex-col hidden">
              <div className="flex-1 p-6 pt-64 flex flex-col justify-end text-white">
                <h3 className="text-4xl font-normal mb-2">
                  See a list of other public assets for purchase
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
    </>
  );
};

export default ListingPage;
