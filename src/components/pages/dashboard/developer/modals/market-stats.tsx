import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ApartmentDashboard() {
  const [timeFrame, setTimeFrame] = useState("today");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>([]);
  const [maxValue, setMaxValue] = useState(1336);

  // Generate sample data based on time frame
  useEffect(() => {
    const generateData = () => {
      const data = [];
      let baseValue = 900;
      let points = 0;

      switch (timeFrame) {
        case "today":
          points = 24;
          break;
        case "1d":
          points = 24;
          break;
        case "1w":
          points = 7;
          break;
        case "6m":
          points = 26;
          break;
        case "1yr":
          points = 52;
          break;
        default:
          points = 24;
      }

      // Create more realistic price movements with some trends
      for (let i = 0; i < points; i++) {
        const volatility = Math.random() * 100 - 50;
        // Add some trend patterns
        if (i > points / 2) {
          baseValue = Math.max(700, baseValue + volatility + 15); // Uptrend in latter half
        } else {
          baseValue = Math.max(700, baseValue + volatility - 5); // Slight downtrend in first half
        }

        // Add some dips and peaks
        if (i === Math.floor(points / 3)) {
          baseValue -= 150; // Create a significant dip
        }
        if (i === Math.floor(points * 0.8)) {
          baseValue += 200; // Create a significant peak
        }

        data.push({
          time: i,
          value: Math.round(baseValue),
        });
      }

      // Set the max display value
      const highest = Math.max(...data.map((item) => item.value));
      setMaxValue(highest);

      return data;
    };

    setChartData(generateData());
  }, [timeFrame]);

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { value: number }[];
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded-md border border-gray-200">
          <p className="text-sm font-medium">{`${payload[0].value} NGN`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-medium text-gray-700 mb-8">
        Cosgrove Greenview Apartments
      </h1>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-gray-500 text-sm">Stock price</p>
          <p className="text-2xl font-bold">N12,000/ Unit</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Unit Available</p>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700 text-lg mb-2">Current Value</p>
          <p className="text-3xl font-bold">NGN 1.2B</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="inline-block border border-dotted border-blue-400 px-3 py-1 rounded text-blue-600 mb-2">
            MoM Growth
          </div>
          <p className="text-3xl font-bold text-black">+10.5%</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Price Trends</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeFrame("today")}
              className={`px-4 py-2 rounded-full ${timeFrame === "today" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-700"}`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeFrame("1d")}
              className={`px-4 py-2 rounded-full ${timeFrame === "1d" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-700"}`}
            >
              1d
            </button>
            <button
              onClick={() => setTimeFrame("1w")}
              className={`px-4 py-2 rounded-full ${timeFrame === "1w" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-700"}`}
            >
              1w
            </button>
            <button
              onClick={() => setTimeFrame("6m")}
              className={`px-4 py-2 rounded-full ${timeFrame === "6m" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-700"}`}
            >
              6m
            </button>
            <button
              onClick={() => setTimeFrame("1yr")}
              className={`px-4 py-2 rounded-full ${timeFrame === "1yr" ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-700"}`}
            >
              1yr
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg h-96">
          <div className="flex justify-end mb-2">
            <span className="text-gray-700 font-medium">{maxValue} NGN</span>
          </div>

          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" hide={true} />
              <YAxis hide={true} domain={["dataMin - 100", "dataMax + 50"]} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#000000"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
