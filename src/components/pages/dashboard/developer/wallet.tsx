import usePageTitle from "@/hooks/use-page-title";
import { StatCard } from "./children/stat-card";
import {
  Activity,
  CardSend,
  Information,
  MoneyRecive,
  ReceiptSearch,
  Wallet,
} from "iconsax-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import IMAGES from "@/assets/images";

const WalletPage = () => {
  usePageTitle("Wallet");

  return (
    <>
      {/* Dashboard Content */}
      <div className=" flex-1 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            // key={stat.title}
            title={"Wallet Balance"}
            value={0}
            icon={<Wallet size={18} color="#000" />}
            currency={"NGN"}
          />

          <div className="bg-white rounded-md border border-gray-200 relative col-span-2">
            <div className="flex items-center gap-2 text-gray-800 mb-2 py-4 border-b border-gray-200 px-4">
              <Activity size={18} color="#000" />
              <span className="text-sm">{"Quick Actions"}</span>
            </div>
            <div className="px-4 py-6">
              <div className="flex justify-around items-center gap-2">
                <Link to={"#"} className="flex flex-col items-center gap-1">
                  <CardSend size={25} color="#FCCF2F" />
                  <span className="text-gray-500">Make Withdrawal</span>
                </Link>

                <Link to={"#"} className="flex flex-col items-center gap-1">
                  <MoneyRecive size={25} color="#FCCF2F" />
                  <span className="text-gray-500">Wallet Top up</span>
                </Link>

                <Link to={"#"} className="flex flex-col items-center gap-1">
                  <ReceiptSearch size={25} color="#FCCF2F" />
                  <span className="text-gray-500">Get Transaction History</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-md border border-gray-200 relative col-span-">
            <div className="flex items-center gap-2 text-gray-800 mb-2 py-4 border-b border-gray-200 px-4">
              <Information size={18} color="#FCCF2F" />
              <span className="text-sm text-[#FCCF2F]">{"Tips"}</span>
            </div>
            <div className="px-4 py-6">
              <div className="flex items-center gap-2 text-xs text-[#BABABA]">
                Withdrawals Are Processed Within 5 Business Days
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full h-full bg-white p-0 overflow-hidden shadow-none border-gray-200">
            <div className=" p-3 border-b border-gray-200 flex flex-col relative overflow-hidden">
              <p className="font-medium text-[14px] ">
                Connect wallet to your bank
              </p>
            </div>
            <CardContent className="text-center p-0">
              <div className="text-gray-600 px-5 flex flex-col items-center py-5">
                <img src={IMAGES.EmptyBlock} alt="" className="w-[48px] pb-3" />
                <div>
                  <p className="font-medium text-black">No Linked Account</p>
                  <p>You are yet to connected your wallet</p>
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 my-4"></div>
              <div className="text-gray-500 px-10">
                <p className="font-light text-sm">
                  To make withdrawals and perform in-app purchases your wallet
                  must be connected to a bank account
                </p>
                <Button className="rounded-full text-black my-7">
                  Connect Wallet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
