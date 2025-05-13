import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import KYBForm from "./kyc-forms/kyb";
import ContactPersonForm from "./kyc-forms/contact-person";
import BusinessAddressForm from "./kyc-forms/business-address";
import ProjectReadinessForm from "./kyc-forms/project-readiness";
import TermsForm from "./kyc-forms/terms";
import { useNavigation } from "@/utils/navigation";
import { toast } from "sonner";
import { ROUTES } from "@/config/route";

const steps = [
  { component: KYBForm },
  { component: ContactPersonForm },
  { component: BusinessAddressForm },
  { component: ProjectReadinessForm },
  { component: TermsForm },
];

const DeveloperOnboardingKYC = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const { goTo } = useNavigation();

  const totalSteps = steps.length;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      toast.success("KYC Completed");
      goTo(ROUTES.ONBOARDING.DEVELOPER.THANK_YOU);
    }
  };

  const goPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const CurrentForm = steps[currentStep].component;

  return (
    <div className="w-[612px] mx-auto py-10 z-10">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm mb-1">
          <span>
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>

      {/* Current Step */}
      <div className="bg-white w-full h-full rounded-lg border p-6">
        <CurrentForm onFinish={goNext} onPrevious={goPrevious} />
      </div>
    </div>
  );
};

export default DeveloperOnboardingKYC;
