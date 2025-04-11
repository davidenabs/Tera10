import { ArrowRight } from "iconsax-react";
import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string | number;
  currency?: string;
};

export function StatCard({ icon, title, value, currency }: StatCardProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 relative">
      <div className="flex items-center gap-2 text-gray-800 mb-2 py-4 border-b border-gray-200 px-4">
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <div className="px-4 py-6">
        <div className="flex items-center gap-2">
          {currency && <span className="text-xl">{currency}</span>}
          <p className="text-3xl font-semibold">{value}</p>
        </div>
        <ArrowRight
          className="absolute bottom-4 right-4 text-gray-400"
          size={20}
          color="#000000"
        />
      </div>
    </div>
  );
}
