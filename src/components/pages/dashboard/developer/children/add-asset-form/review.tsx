import React from "react";
import { Button } from "@/components/ui/button";
import { CloseCircle, Edit2 } from "iconsax-react";
import IMAGES from "@/assets/images";
import AppModal from "@/components/common/modal";
import ComplianceDocumentUpload from "../../modals/compliants-doc";

const PreviewSubmit = () => {
  const [open, setOpen] = React.useState(false);
  // Sample data - in a real application, you would get this from props or context
  const propertyData = {
    basic: {
      name: "Greenview Apartments",
      location: "3rd Avenue, Hilltop Gwarimpa, Abuja",
      description:
        "Palm Height Real Estate in Lugbe, Abuja, is a premium residential development designed to offer modern living in a serene and strategically located environment. Nestled along the bustling Umaru Musa Yar'Adua Expressway, this estate combines accessibility with tranquility, making it ideal for families and professionals. Palm Height features contemporary...",
      mediaFiles: [
        IMAGES.milestone1,
        IMAGES.milestone2,
        IMAGES.milestone3,
        IMAGES.milestone4,
      ],
    },
    pricing: {
      unitPrice: "NGN 12,000",
      availableUnits: "1243",
      maxPerIndividual: "500",
    },
    milestones: [
      {
        phase: "Phase 1",
        title: "Project Initiation",
        dateRange: "Feb 1, 2025 - Feb 15, 2025",
        description:
          "Conduct a thorough site survey and environmental impact assessment to ensure compliance with local regulations and identify any potential environmental concerns.",
        images: [
          IMAGES.milestone2,
          IMAGES.milestone3,
          IMAGES.milestone1,
          IMAGES.milestone1,
        ],
      },
      {
        phase: "Phase 2",
        title: "Project Initiation",
        dateRange: "Feb 1, 2025 - Feb 15, 2025",
        description:
          "Conduct a thorough site survey and environmental impact assessment to ensure compliance with local regulations and identify any potential environmental concerns.",
        images: [
          IMAGES.milestone4,
          IMAGES.milestone2,
          IMAGES.milestone3,
          IMAGES.milestone1,
        ],
      },
    ],
  };

  const handleEdit = (section: string) => {
    console.log(`Edit ${section} section`);
    // Implementation for editing a section would go here
  };

  const handleRemoveImage = (section: string, index: number) => {
    console.log(`Remove image ${index} from ${section}`);
    // Implementation for removing an image would go here
  };

  const handleSubmit = () => {
    console.log("Form submitted");
    // Implementation for form submission would go here
    setOpen(true);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-32">
        {/* Basic Information Section */}
        <div className="">
          <div className="flex items-center justify-between mb-4 gap-2">
            <h2 className="text-green-500 font-medium flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Basic
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-700 p-1 h-auto"
              onClick={() => handleEdit("basic")}
            >
              Edit <Edit2 size={16} color="#6a7282" className="ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4  text-[#667085] items-center">
            <div className="col-span-1 text-gray-600 font-semibold">
              Property Name:
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.basic.name}
            </div>

            <div className="col-span-1 text-gray-600 font-semibold">
              Location
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.basic.location}
            </div>

            <div className="col-span-1 text-gray-600 font-semibold">
              Description
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.basic.description}
            </div>

            <div className="col-span-1 text-gray-600 font-semibold">
              Media Files
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap gap-2 justify-end">
                {propertyData.basic.mediaFiles.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Property image ${index + 1}`}
                      className="w-24 h-16 object-cover rounded-md"
                    />
                    <button
                      className="absolute -top-2 -left-2 bg-white rounded-full p-0.5"
                      onClick={() => handleRemoveImage("basic", index)}
                    >
                      <CloseCircle size={16} color="#374151" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="">
          <div className="flex items-center mb-5 gap-2">
            <h2 className="text-green-500  font-medium flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Pricing
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-[#667085] items-center">
            <div className="col-span-1 text-gray-600 font-semibold">
              Unit Price
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.pricing.unitPrice}
            </div>

            <div className="col-span-1 text-gray-600 font-semibold">
              Available Unit
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.pricing.availableUnits}
            </div>

            <div className="col-span-1 text-gray-600 font-semibold">
              Max Per individual
            </div>
            <div className="col-span-2 text-right font-light">
              {propertyData.pricing.maxPerIndividual}
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="">
          <div className="flex items-center  mb-5">
            <h2 className="text-green-500  font-medium flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Milestones
            </h2>
          </div>

          {propertyData.milestones.map((milestone, index) => (
            <div key={index} className="flex items-start mb-16">
              {/* Left Side: Phase and Line */}
              <div className="relative flex flex-col items-center justify-center self-center w-24">
                <span className="text-sm font-semibold text-gray-700 mb-2">
                  {milestone.phase}
                </span>

                {/* Line - only if not the last milestone */}
                {index !== propertyData.milestones.length - 1 && (
                  <>
                    <div
                      className="w-px h-full bg-gray-300"
                      style={{ height: "" }}
                    />
                  </>
                )}
              </div>

              {/* Right Side: Milestone Content */}
              <div className="flex-1 pl-4 text-[#667085]">
                <div className="flex flex-col items-end">
                  <div className="text-right font-medium">
                    {milestone.title}
                  </div>
                  <div className="text-right  text-sm">
                    {milestone.dateRange}
                  </div>
                  <div className="text-right mt-2 max-w-[396.5px]">
                    {milestone.description}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-end mt-4">
                  {milestone.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative">
                      <img
                        src={image}
                        alt={`Milestone image ${imgIndex + 1}`}
                        className="w-24 h-16 object-cover rounded-md"
                      />
                      <button
                        className="absolute -top-2 -left-2 bg-white rounded-full p-0.5"
                        onClick={() =>
                          handleRemoveImage(`milestone-${index}`, imgIndex)
                        }
                      >
                        <CloseCircle size={16} color="#374151" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button className="px-8 py-2 rounded-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      <AppModal
        open={open}
        setOpen={setOpen}
        title="Upload Property License Document"
        className="sm:max-w-[588px] bg-white"
      >
        <ComplianceDocumentUpload />
      </AppModal>
    </>
  );
};

export default PreviewSubmit;
