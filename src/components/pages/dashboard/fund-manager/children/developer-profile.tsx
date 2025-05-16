import { ReactNode, useState } from "react";
import {
  Search,
  Building,
  FileText,
  Check,
  CreditCard,
  User,
  Timer,
//   ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Buildings, CloseCircle } from "iconsax-react";
import { Button } from "@/components/ui/button";
import AppModal from "@/components/common/modal";
import { toast } from "sonner";
import Documents from "./document-list";

// Types
interface DeveloperProfile {
  id: number;
  name: string;
  location: string;
  requestDate: string;
  category: string;
  isSelected?: boolean;
}

interface CompanyInfo {
  companyName: string;
  website: string;
  entityType: string;
  registrationNumber: string;
  countryOfIncorporation: string;
  dateOfIncorporation: string;
  cacCertificate: string;
  companyAddress: string;
  city: string;
  state: string;
  country: string;
  bankName: string;
  bankAccountNumber: string;
  bvn: string;
  accountType: string;
  governmentId: string;
  fullName: string;
  position: string;
  email: string;
  phoneNumber: string;
  govtId: string;
}

// Sample data
const developerProfiles: DeveloperProfile[] = [
  {
    id: 1,
    name: "Cosgrove",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 2,
    name: "Bilad",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 3,
    name: "Brains & Hammers",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 4,
    name: "Hectares",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 5,
    name: "Land Republic",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 6,
    name: "Homeland",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 7,
    name: "CityWorks",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
  {
    id: 8,
    name: "Riviera Vista",
    location: "Abuja, NIG",
    requestDate: "12,May 2025",
    category: "Real Estate",
  },
];

const companyInfo: CompanyInfo = {
  companyName: "Cosgroove Africa Ltd",
  website: "cosgroveafrica.com",
  entityType: "Documents",
  registrationNumber: "BN2323819920",
  countryOfIncorporation: "Documents",
  dateOfIncorporation: "Documents",
  cacCertificate: "View Document",
  //
  companyAddress:
    "4th Floor, Mukhtar El Yakub Building\nZakariyya Maimalari Street, Central Business District Abuja. FCT 900211 Nigeria",
  city: "Abuja",
  state: "FCT",
  country: "Nigeria",
  bankName: "Access",
  bankAccountNumber: "1234567890",
  bvn: "221234567890",
  accountType: "Opening",
  governmentId: "View Document",
  fullName: "Emmanuel John DOe",
  position: "Director",
  email: "ema@gmail.com",
  phoneNumber: "+2340816677773",
  govtId: "View Document",
};

const CompanyField = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div>
    <h3 className="text-sm font-medium mb-1">{label}</h3>
    <div className="text-gray-500">{children}</div>
  </div>
);

export default function DeveloperProfileReview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] =
    useState<DeveloperProfile | null>(developerProfiles[0]);
  const [activeTab, setActiveTab] = useState<string>("Business Identity");

  // Count of all developer profiles
  const totalProfiles = developerProfiles.length;

  // Filtered profiles based on search
  const filteredProfiles = developerProfiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Available tabs for the multistep process
  const tabs = [
    { id: "Business Identity", icon: <Building className="h-4 w-4 mr-2" /> },
    {
      id: "Business Address & Banking Info",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
    },
    { id: "Contact Person", icon: <User className="h-4 w-4 mr-2" /> },
    { id: "Project Readiness", icon: <Timer className="h-4 w-4 mr-2" /> },
  ];

  // Secondary tabs
  const secondaryTabs = [
    { id: "Documents", icon: <FileText className="h-4 w-4 mr-2" /> },
    { id: "Approval", icon: <Check className="h-4 w-4 mr-2" /> },
  ];

  // Handle profile selection
  const handleProfileSelect = (profile: DeveloperProfile) => {
    setSelectedProfile(profile);
  };

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const [open, setOpen] = useState(false);
  const [showDeclineReason, setShowDeclineReason] = useState(false);
  //   const [declineReason, setDeclineReason] = useState("");

  //   if (!isOpen) return null;

  const handleDecline = () => {
    toast.success("Decline successfully");
    setShowDeclineReason(false);
  };

  const handleApprove = () => {
    toast.success("Approved successfully");
    setOpen(false);
  };

  return (
    <div className="flex hcreen border rounded-lg overflow-hidden">
      {/* Left Panel */}
      <div className="w-96 border-r border-gray-200 bg-hite overflow-y-auto p-3 bg-gray-50 ">
        <div className="p-3 bg-black text-white flex justify-between items-center rounded-lg">
          <h2 className="text-sm font-medium">
            Developer Profile Review
            <p className="text-xs font-light opacity-80">Manage requests</p>
          </h2>
          <div className="bg-green-500 px-2 py-1 rounded-md text-white font-medium">
            {totalProfiles}
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg mt-2">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button className="w-full mt-4 p-2 border rounded-md flex items-center justify-center">
              <span className="mr-2">Filters</span>
            </button>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">All ({totalProfiles})</h3>
          </div>

          <div className="space-y-px">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className={cn(
                  "p-4 cursor-pointer rounded-lg",
                  selectedProfile?.id === profile.id
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                )}
                onClick={() => handleProfileSelect(profile)}
              >
                <div className="text-sm font-medium">{profile.name}</div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{profile.location}</span>
                  <span className="mx-2 bg-gray-200 h-2 w-2 rounded-full "></span>
                  <span>{profile.requestDate}</span>
                  <span className="mx-2 bg-gray-200 h-2 w-2 rounded-full "></span>
                  <span>{profile.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white p-12">
        {selectedProfile && (
          <div className="p8">
            <div className="flex flex-col items-start mb-8">
              <div className="flex gap-2 items-start">
                <Buildings color="#000" className="h-6 w-6" />
                <h1 className="text-xl font-medium">{selectedProfile.name}</h1>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>{selectedProfile.location}</span>
                  <span className="mx-2 bg-gray-200 h-2 w-2 rounded-full "></span>
                  <span>Requested: {selectedProfile.requestDate}</span>
                  <span className="mx-2 bg-gray-200 h-2 w-2 rounded-full "></span>
                  <span>{selectedProfile.category}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={cn(
                      "px-4 py-2 text-sm font-medium border-b-2 -mb-px flex items-center",
                      activeTab === tab.id
                        ? "border-yellow-400 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    )}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.icon}
                    {tab.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary Tabs */}
            <div className="border-b w-fit border-gray-200 mt-2">
              <div className="flex">
                {secondaryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={cn(
                      "px-4 py-2 text-sm font-medium border-b-2 -mb-px flex items-center",
                      activeTab === tab.id
                        ? "border-yellow-400 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    )}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.icon}
                    {tab.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="py-6">
              {activeTab === "Business Identity" && (
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Company Name">
                      {companyInfo.companyName}
                    </CompanyField>
                    <CompanyField label="Website">
                      <a
                        href={`https://${companyInfo.website}`}
                        className="hover:underline"
                      >
                        {companyInfo.website}
                      </a>
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Type of Entity">
                      {companyInfo.entityType}
                    </CompanyField>
                    <CompanyField label="Business Registration Number">
                      <div className="flex items-center">
                        <span>{companyInfo.registrationNumber}</span>
                        <button className="ml-2 text-sm hover:underline">
                          Verify Now
                        </button>
                      </div>
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Country of Incorporation">
                      {companyInfo.countryOfIncorporation}
                    </CompanyField>
                    <CompanyField label="Date of Incorporation">
                      {companyInfo.dateOfIncorporation}
                    </CompanyField>
                  </div>

                  <CompanyField label="CAC Certificate">
                    <button className="text-sm hover:underline">
                      {companyInfo.cacCertificate}
                    </button>
                  </CompanyField>
                </div>
              )}

              {activeTab === "Business Address & Banking Info" && (
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Company Address">
                      {companyInfo.companyAddress}
                    </CompanyField>
                    <CompanyField label="City">{companyInfo.city}</CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="State/Province">
                      {companyInfo.state}
                    </CompanyField>
                    <CompanyField label="Country">
                      {companyInfo.country}
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Bank Name">
                      {companyInfo.bankName}
                    </CompanyField>
                    <CompanyField label="Bank Account Number">
                      <a href="#" className="hover:underline">
                        {companyInfo.bankAccountNumber}
                      </a>
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Bank Verification Number">
                      <a href="#" className="hover:underline">
                        {companyInfo.bvn}
                      </a>
                    </CompanyField>
                    <CompanyField label="Account Type">
                      <a href="#" className="hover:underline">
                        {companyInfo.accountType}
                      </a>
                    </CompanyField>
                  </div>

                  <CompanyField label="Government Issued ID">
                    <a href="#" className="hover:underline">
                      {companyInfo.governmentId}
                    </a>
                  </CompanyField>
                </div>
              )}

              {activeTab === "Contact Person" && (
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Full name">
                      {companyInfo.fullName}
                    </CompanyField>
                    <CompanyField label="Position">
                      {companyInfo.position}
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Email">
                      {companyInfo.email}
                    </CompanyField>
                    <CompanyField label="Phone Number">
                      <div className="flex items-center">
                        <span>{companyInfo.phoneNumber}</span>
                      </div>
                    </CompanyField>
                  </div>

                  <CompanyField label="Government Issued ID">
                    <button className="text-sm hover:underline">
                      {companyInfo.govtId}
                    </button>
                  </CompanyField>
                </div>
              )}

              {activeTab === "Project Readiness" && (
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Company Name">
                      {companyInfo.companyName}
                    </CompanyField>
                    <CompanyField label="Website">
                      <a
                        href={`https://${companyInfo.website}`}
                        className="hover:underline"
                      >
                        {companyInfo.website}
                      </a>
                    </CompanyField>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Type of Entity">
                      {companyInfo.entityType}
                    </CompanyField>
                    <CompanyField label="Business Registration Number">
                      <div className="flex items-center">
                        <span>{companyInfo.registrationNumber}</span>
                        <button className="ml-2 text-sm hover:underline">
                          Verify Now
                        </button>
                      </div>
                    </CompanyField>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    Our projects are not just buildings; they're the embodiment
                    of forward-thinking design and cutting-edge technology,
                    seamlessly integrated to create next-generation smart homes.
                    Each home is a testament of our commitment to quality, our
                    passion for innovation, and our dedication to crafting
                    spaces that go beyond the ordinary.
                  </div>

                  {/* 

                  <div className="grid grid-cols-2 gap-8">
                    <CompanyField label="Country of Incorporation">
                      {companyInfo.countryOfIncorporation}
                    </CompanyField>
                    <CompanyField label="Date of Incorporation">
                      {companyInfo.dateOfIncorporation}
                    </CompanyField>
                  </div>

                  <CompanyField label="CAC Certificate">
                    <button className="text-sm hover:underline">
                      {companyInfo.cacCertificate}
                    </button>
                  </CompanyField> */}
                </div>
              )}

              {activeTab === "Documents" && <Documents />}

              {activeTab === "Approval" && (
                <>
                  <div className="bg-[#6882C1] text-white p-6 rounded-lg">
                    <div className="bg-black rounded-md w-10 h-10 flex items-center justify-center mb-4">
                      <div className="text-yellow-400 text-2xl font-bold">
                        ??
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-2">
                      Account Approval
                    </h2>
                    <p className="text-blue-100">
                      Approving this account means that {selectedProfile.name}{" "}
                      will be able to proceed to access their accounts. If{" "}
                      {selectedProfile.name} doesn't meet eligibility
                      requirement, decline with reason
                    </p>
                  </div>
                  <div className="pt-10 flex justify-end space-x-2">
                    <Button
                      variant={"outline"}
                      onClick={() => setShowDeclineReason(true)}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-50"
                    >
                      {!showDeclineReason && (
                        <CloseCircle className="mr-2" color="#000" size={16} />
                      )}
                      {showDeclineReason ? "Submit Decline" : "Decline"}
                    </Button>

                    <Button
                      onClick={() => setOpen(true)}
                      className=" text-black rounded-full "
                    >
                      Approve
                    </Button>
                  </div>

                  <AppModal
                    open={open}
                    setOpen={setOpen}
                    title="Validate Action"
                    className="bg-white space-y-4"
                  >
                    <div className="space-y-4 -mt-10">
                      <div className="text-xl pb3">
                        You are about to grant access to{" "}
                        <span className="font-bold">
                          {selectedProfile.name}
                        </span>{" "}
                      </div>
                      <div className="font-light">
                        Approving this account means that company will be able
                        to proceed to access their accounts
                      </div>

                      <Button
                        onClick={handleApprove}
                        className=" text-black rounded-full "
                      >
                        Confirm Approve
                      </Button>
                    </div>
                  </AppModal>

                  <AppModal
                    open={showDeclineReason}
                    setOpen={setShowDeclineReason}
                    title="Validate Action"
                    className="bg-white space-y-4"
                  >
                    <div className="space-y-4 -mt-10">
                      <div className="text-xl pb3">
                        You have chosen to decline account access to{" "}
                        <span className="font-bold">
                          {selectedProfile.name}
                        </span>{" "}
                      </div>
                      <div className="font-light">
                        Approving this account means that company will be able
                        to proceed to access their accounts
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Note
                        </label>
                        <textarea
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                          placeholder="Please provide a reason for declining this account..."
                          //   value={declineReason}
                          //   onChange={(e) => setDeclineReason(e.target.value)}
                        />
                      </div>

                      <Button
                        onClick={handleDecline}
                        className=" text-black rounded-full "
                      >
                        Decline Access
                      </Button>
                    </div>
                  </AppModal>
                </>
              )}
            </div>
          </div>
        )}

        {/* Next Button */}
        {/* <div className="absolute bottom-10 right-10">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium flex items-center hover:bg-yellow-500">
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
