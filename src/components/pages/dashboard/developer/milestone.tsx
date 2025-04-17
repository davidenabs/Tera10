import React from "react";
import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import usePageTitle from "@/hooks/use-page-title";
import { formatDateRange } from "@/utils/string";
import {
  ArrowDown2,
  CloseCircle,
  Edit2,
  Messages1,
  Moneys,
  Receipt,
  SearchNormal,
  Trash,
} from "iconsax-react";

interface ProjectPhase {
  phase: string;
  title: string;
  dateRange: string;
  description: string;
  images: string[];
}

interface MilestoneProps {
  id: string;
  phase: string;
  title: string;
  startDate: Date;
  endDate: Date;
  activities?: string;
  images?: FileList | null;
  milestones: ProjectPhase[] | null;
}

const milestoneData: MilestoneProps[] = [
  {
    id: "1",
    phase: "Phase 1",
    title: "Project Initiation",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-02-15"),
    milestones: [
      {
        phase: "Phase 1",
        title: "Project Initiation",
        dateRange: "Feb 1, 2025 - Feb 15, 2025",
        description:
          "Conduct a thorough site survey and environmental impact assessment to ensure compliance with local regulations and identify any potential environmental concerns.",
        images: [IMAGES.milestone2, IMAGES.milestone3, IMAGES.milestone1],
      },
      {
        phase: "Phase 2",
        title: "Site Planning",
        dateRange: "Feb 16, 2025 - Mar 01, 2025",
        description:
          "Develop comprehensive site plans based on the environmental study and zoning restrictions.",
        images: [IMAGES.milestone4, IMAGES.milestone2],
      },
    ],
  },
  {
    id: "2",
    phase: "Phase 2",
    title: "Design Development",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-03-15"),
    milestones: [],
  },
];

const MilestonePage = () => {
  usePageTitle("Milestone");

  const [search, setSearch] = React.useState("");
  const [selectedMilestone, setSelectedMilestone] =
    React.useState<MilestoneProps | null>(null);

  const filteredMilestones = milestoneData.filter((milestone) =>
    milestone.phase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:grid grid-cols-5 gap-4">
      {/* Sidebar */}
      <div className="md:col-span-2 md:border-r border-[#E7E9F1] md:pr-10">
        <div className="flex gap-4 items-center mb-6">
          <div className="relative flex-1">
            <SearchNormal
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              color="#777777"
            />
            <Input
              placeholder="Search"
              className="pl-10 rounded-xl h-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredMilestones.map((milestone) => (
            <Card
              key={milestone.id}
              onClick={() => setSelectedMilestone(milestone)}
              className="mb-4 p-2 shadow-none border-gray-200 border w-full !mi-w-[424px] h-[282px] hover:cursor-pointer"
            >
              <CardContent className="p-2">
                <div className="h-32 bg-gray-100 rounded-xl mb-2" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-slate-700">
                    {milestone.phase}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Trash size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Edit2 size={20} />
                    </Button>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-2">{milestone.title}</p>
                <div className="text-sm text-gray-500">
                  {formatDateRange(milestone.startDate, milestone.endDate)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-3">
        {selectedMilestone && (
          <MilestoneDetails milestone={selectedMilestone} />
        )}
      </div>
    </div>
  );
};

export default MilestonePage;

function MilestoneDetails({ milestone }: { milestone: MilestoneProps }) {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-medium text-gray-400 mb-1">Milestones</h1>
      <h2 className="text-sm text-gray-500 mb-6">
        Cosgrove Greenview Apartments
      </h2>

      <div className="flex max-md:flex-col items-center gap-4 mb-8">
        <div className="mb- relative">
          <select
            name="phase"
            className="flex items-center justify-between w-64 px-4 py-1 rounded-lg border border-gray-300 text-gray-700 appearance-none"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="Phase 1">Phase 1</option>
            <option value="Phase 2">Phase 2</option>
            <option value="Phase 3">Phase 3</option>
            <option value="Phase 4">Phase 4</option>
          </select>
          <ArrowDown2
            size={20}
            color="#4a5565"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Moneys size={20} color="#4a5565" />
          <span className="text-gray-700 font-medium">Funding</span>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
            Pending
          </span>
        </div>
      </div>

      {milestone.milestones?.map((milestoneItem, index) => (
        <div key={index} className="flex items-center mb-16">
          <div className="relative w-24 flex flex-col items-center">
            <span className="text-sm font-semibold text-gray-700 mb-2">
              {milestoneItem.phase}
            </span>
            {index !== (milestone.milestones?.length || 0) - 1 && (
              <div className="w-px h-full bg-gray-300" />
            )}
          </div>

          <div className="flex-1 pl-4 text-[#667085]">
            <div className="text-right">
              <div className="font-medium">{milestoneItem.title}</div>
              <div className="text-sm">{milestoneItem.dateRange}</div>
              <p className="mt-2 max-w-md ml-auto">
                {milestoneItem.description}
              </p>
            </div>

            <div className="flex md:flex-wrap gap-2 justify-end mt-4">
              {milestoneItem.images.map((img, imgIndex) => (
                <div key={imgIndex} className="relative">
                  <img
                    src={img}
                    alt={`Milestone ${imgIndex + 1}`}
                    className="w-24 h-16 object-cover rounded-md"
                  />
                  <button className="absolute -top-2 -left-2 bg-white rounded-full p-0.5">
                    <CloseCircle size={16} color="#374151" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="flex max-md:flex-col gap-3 items-center justify-between py-4 border-t border-gray-200 mb-8">
        <div className="flex items-center gap-2">
          <Receipt size={20} className="text-gray-600" color="#4a5565" />
          <span className="font-medium text-gray-700">Milestone Status</span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Completed
          </span>
        </div>
        <button className="bg-white border border-gray-300 px-4 py-1 shadow rounded-lg text-gray-700">
          Funding Requested
        </button>
      </div>

      {/* Conversations Section */}
      <div className="border border-gray-200 rounded-lg p-14 flex flex-col items-center justify-center text-center">
        <div className=" mb-4">
          <Messages1
            size={32}
            stroke=""
            className="text-gray-500"
            color="#4a5565"
          />
        </div>
        <h3 className="text-gray-500 mb-2 text-base">
          Your conversations with the fund
        </h3>
        <p className="text-gray-500">manager will appear</p>
      </div>
    </div>
  );
}
