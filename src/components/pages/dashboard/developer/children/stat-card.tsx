import { ArrowRight, Star1 } from "iconsax-react";
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
          <p className="text-3xl font-semibold">{value.toLocaleString()}</p>
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

type StatCardProps2 = {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  value?: string | number;
  change?: {
    value: string;
    isPositive?: boolean;
  };
  additionalInfo?: string;
  currency?: string;
};

export function StatCard2({
  icon,
  title,
  subtitle,
  // value,
  change,
  additionalInfo,
  // currency,
}: StatCardProps2) {
  return (
    <div className="bg-white rounded-md border border-gray-200 relative">
      {/* Header with title */}
      <div className="flex items-center gap-2 text-gray-800 mb-2 py-4 border-b border-gray-200 px-4">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>

      {/* Content section */}
      <div className="p-4">
        <div className="flex justify-between">
          {/* Property name and icon row */}
          {subtitle && (
            <div className="flex items-center gap-3 mb-2">
              {icon && (
                <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
                  {/* {icon} */}
                  <Star1 color="#000" size={24} />
                </div>
              )}
              <h3 className="text-sm font-medium text-gray-700">{subtitle}</h3>
            </div>
          )}

          {/* Main value and change indicator */}
          <div className="flex justify-between items-center mb-2">
            {/* {value && (
            <div className="flex items-center gap-2">
              {currency && <span className="text-xl">{currency}</span>}
              <p className="text-3xl font-semibold">{value}</p>
            </div>
          )} */}

            {change && (
              <div className="flex flex-col items-end">
                <span
                  className={`text-sm font-semibold ${change.isPositive !== false ? "text-green-700" : "text-red-600"}`}
                >
                  {change.value}
                </span>
                <span className="text-gray-400 text-[11px]">Today</span>
              </div>
            )}
          </div>
        </div>

        {/* Additional information text */}
        {additionalInfo && (
          <div className="text-right text-gray-700">{additionalInfo}</div>
        )}
      </div>
    </div>
  );
}