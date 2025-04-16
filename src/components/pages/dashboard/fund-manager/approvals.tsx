import usePageTitle from "@/hooks/use-page-title";
import InvestmentCard from "./children/investment-cards";

const ApprovalPage = () => {
  usePageTitle("Approvals");

  const investments = [
    {
      name: "Greenview Apartments",
      company: "TechVest Capital",
      target: "$5M Target",
      submittedDate: "Jan 15, 2025",
      investmentType: "Equity",
      industry: "Technology",
      stage: "Series A",
    },
    {
      name: "Production Zone Towers",
      company: "TechVest Capital",
      target: "$5M Target",
      submittedDate: "Jan 15, 2025",
      investmentType: "Equity",
      industry: "Technology",
      stage: "Series A",
    },
    {
      name: "Riverside Lifestyle Center",
      company: "TechVest Capital",
      target: "$5M Target",
      submittedDate: "Jan 15, 2025",
      investmentType: "Equity",
      industry: "Technology",
      stage: "Series A",
    },
  ];

  return (
    <>
      {/* Dashboard Content */}
      <div className=" flex-1 ">
        <div className="space-y-6">
          <div className="p-6max-w-4xl mx-auto">
            {investments.map((investment, index) => (
              <InvestmentCard
                key={index}
                name={investment.name}
                company={investment.company}
                target={investment.target}
                submittedDate={investment.submittedDate}
                investmentType={investment.investmentType}
                industry={investment.industry}
                stage={investment.stage}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalPage;

// Main App Component
// export default function InvestmentReviewDashboard() {
//   const investments = [
//     {
//       name: "Greenview Apartments",
//       company: "TechVest Capital",
//       target: "$5M Target",
//       submittedDate: "Jan 15, 2025",
//       investmentType: "Equity",
//       industry: "Technology",
//       stage: "Series A"
//     },
//     {
//       name: "Production Zone Towers",
//       company: "TechVest Capital",
//       target: "$5M Target",
//       submittedDate: "Jan 15, 2025",
//       investmentType: "Equity",
//       industry: "Technology",
//       stage: "Series A"
//     },
//     {
//       name: "Riverside Lifestyle Center",
//       company: "TechVest Capital",
//       target: "$5M Target",
//       submittedDate: "Jan 15, 2025",
//       investmentType: "Equity",
//       industry: "Technology",
//       stage: "Series A"
//     }
//   ];

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       {investments.map((investment, index) => (
//         <InvestmentCard
//           key={index}
//           name={investment.name}
//           company={investment.company}
//           target={investment.target}
//           submittedDate={investment.submittedDate}
//           investmentType={investment.investmentType}
//           industry={investment.industry}
//           stage={investment.stage}
//         />
//       ))}
//     </div>
//   );
// }
