import { useNavigation } from "@/utils/navigation";
import IMAGES from "@/assets/images";
import { ROUTES } from "@/config/route";
import { Lock, Star, Wallet } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { FC, JSX } from "react";

interface FeatureCardProps {
  icon: () => JSX.Element;
  title: string | JSX.Element;
  description: string;
  hasBorder?: boolean;
}

const features: FeatureCardProps[] = [
  {
    icon: () => <Wallet color="#292D32" className="h-6 w-6 text-black mb-3" />,
    title: (
      <>
        Access <br /> Milestone Funding
      </>
    ),
    description:
      "Access Capital for your real estate projects based on achieved milestones",
    hasBorder: false,
  },
  {
    icon: () => <Lock color="#292D32" className="h-6 w-6 text-black mb-3" />,
    title: (
      <>
        Secure <br /> Platform
      </>
    ),
    description: "Our KYB/KYC process ensures safety and regulatory compliance",
    hasBorder: true,
  },
  {
    icon: () => <Star color="#292D32" className="h-6 w-6 text-black mb-3" />,
    title: (
      <>
        Manage Project <br /> Milestone
      </>
    ),
    description: "Manage and track your development all in one place",
    hasBorder: false,
  },
];

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  hasBorder,
}) => (
  <div
    className={`flex flex-col items-start px-20 ${hasBorder ? "border-x md:border-gray-300" : ""}`}
  >
    <Icon />
    <h3 className="font-medium text-lg">{title}</h3>
    <p className="text-sm text-gray-400 mt-4">{description}</p>
  </div>
);
const DeveloperOnboardingConsoleOverview = () => {
  const { goTo } = useNavigation();

  return (
    <div className="bg-white rounded-3xl overflow-hidden w-full border border[#E7E9F1] mt-10 h[673px] z-10 ">
      <div className="w-full max-w5xl overflow-hidden rounded-t-3xl">
        <img
          src={IMAGES.ConsoleBG}
          alt="Construction Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Welcome Section */}
      <div className="text-center py-10 ">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">
          Welcome to Tera 10
          <br />
          Developer Console
        </h1>
        <p className="text-sm text-gray-500 leading-[22.5px] mt-4">
          You’re just a few steps away from setting up your developer account
          and <br />
          getting access to milestone-based funding for your projects
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center py-15">
        <Button
          onClick={() => goTo(ROUTES.ONBOARDING.DEVELOPER.KYC)}
          className="text-black rounded-full"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default DeveloperOnboardingConsoleOverview;
