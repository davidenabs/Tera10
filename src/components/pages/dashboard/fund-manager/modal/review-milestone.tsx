import { useState } from "react";
import { Switch } from "@/components/ui/switch"; // use your UI library or make a custom one
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CloseCircle, Messages } from "iconsax-react";
import IMAGES from "@/assets/images";

const ReviewMilestone = () => {
  const [deliveryQuality, setDeliveryQuality] = useState(true);
  const [milestoneAlignment, setMilestoneAlignment] = useState(false);
  const [timelineConsistency, setTimelineConsistency] = useState(true);

  return (
    <div className="flex gap-3">
      {/* Left Column */}
      <div className="w-1/2 ">
        <h2 className="text-lg font-medium mb-4">Review Milestone</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-normal">Greenview Apartments</h3>
          <div className="flex justify-between items-center text-sm mt-1">
            <p className="text-gray-600 pt-4">
              Developer:{" "}
              <span className="text-[#A68409] font- underline">Bilad</span>
            </p>
            <button className="text-[#888] text-sm flex items-center gap-1">
              Open Chat <Messages color="#888" size={24} />{" "}
            </button>
          </div>

          <div className="">
            <select className="w-fit mt-1 p-2 border rounded-md text-sm">
              <option>Phase 1</option>
            </select>
          </div>

          <div className="flex items-center gap-4 ">
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full font-medium">
              <span className="text-yellow-700">●</span> Fund requested
            </span>
            <span className="text-sm text-gray-600">
              <strong>Request Date:</strong> 02 April, 2025
            </span>
          </div>

          <div className="">
            <h4 className="font-medium mb-2">Milestone Description</h4>
            <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
              Conduct a thorough site survey and environmental impact assessment
              to ensure compliance with local regulations and identify any
              potential environmental concerns.
            </p>
          </div>

          <div className="">
            <h4 className="text-sm font-medium text-gray-600 mb-2">
              View Before{" "}
              <span className="text-xs ml-2 text-gray-500">12 March, 2025</span>
            </h4>
            <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-lg p-3">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 h-28 rounded-md overflow-hidden"
                >
                  {/* Replace with actual image tags */}
                  <img
                    src={IMAGES.milestone1}
                    className="w-full h-full object-cover"
                    alt={`Before ${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 space-y-4 b-blue-50">
        {/* Revenue Box */}
        <div className="bg-blue-50 rounded-xl p-6 border-t-[5px] border-yellow-300 w-full">
          <h4 className="text-sm text-gray-800">
            REVENUE ACCRUED FOR MILESTONE
          </h4>
          <p className="text-xl font-medium text-gray-800 mt-1">
            NGN 12,980,291
          </p>
          <div className="flex justify-between text-sm mt-4">
            <div className="flex flex-col">
              <span className="text-gray-600 uppercase">
                Proposed Date of Completion
              </span>
              <span className="font-semibold">12 March, 2025</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600">Date Completed</span>
              <span className="font-semibold">12 March, 2025</span>
              <div className="flex items-center gap-2">
                <div className="bg-green-600 h-2 w-2 rounded-full"></div>
                <span>(On time)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white shadow p-6 rounded-xl border-t-[6px] border-yellow-400">
          <h4 className="font-semibold text-sm mb-2">Current Status</h4>
          <div className="flex gap-2 overflow-auto">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={IMAGES.milestone2}
                className="w-[213px] h-28 object-cover rounded-lg"
                alt="Current"
              />
            ))}
          </div>
        </div>

        {/* Inspection Report */}
        <div className="bg-white shadow p-6 rounded-xl border-t-[6px] border-yellow-400">
          <h4 className="font-semibold mb-4 text-sm text-gray-800">
            Inspection Report
          </h4>

          <div className="grid grid-cols-3 bg-gray-100 p-2 rounded-lg items-center text-sm mb-2">
            <div className="font-medium">Delivery quality</div>
            <div>Passed</div>
            <Switch
              checked={deliveryQuality}
              onCheckedChange={setDeliveryQuality}
              className="bg-black"
            />
          </div>

          <div className="grid grid-cols-3 bg-gray-100 p-2 rounded-lg  items-center self-start text-sm mb-2">
            <div className="font-medium">Milestone Alignment</div>
            <div>Not satisfactory</div>
            <Switch
              checked={milestoneAlignment}
              onCheckedChange={setMilestoneAlignment}
            />
          </div>

          <div className="grid grid-cols-3 bg-gray-100 p-2 rounded-lg  items-center text-sm mb-4">
            <div className="font-medium">Timeline Consistency</div>
            <div>Passed</div>
            <Switch
              checked={timelineConsistency}
              onCheckedChange={setTimelineConsistency}
            />
          </div>

          <div className="flex  gap-2 space-y-2 mb-3">
            <div>
              <label className="text-xs text-gray-600">Completion rate</label>
              <Input
                type="text"
                value="100%"
                className="w-full mt-1"
                readOnly
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Amount Payable</label>
              <Input
                type="text"
                value="12,980,291"
                className="w-full mt-1"
                readOnly
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs text-gray-600">Note</label>
            <Textarea
              placeholder="Tell us the activities involved for this project/Milestone"
              className="w-full mt-1"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 rounded-full"
            >
              <CloseCircle color="#364153" /> Reject
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full">
              Approve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewMilestone;
