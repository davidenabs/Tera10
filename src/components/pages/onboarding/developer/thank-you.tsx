import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/route";
import { useNavigation } from "@/utils/navigation";
import { Check, ArrowRight, Phone } from "lucide-react";

const DeveloperOnboardingKYCConfirmation = () => {
  const { goTo } = useNavigation();
  return (
    <div className="z-10">
      {/* Main Content */}
      <div className="flex-1 space-y-8 container mx-auto py-10">
        <div className="bg-white border border-[#FAFAFA] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Confirmation */}
            <div className="w-full lg:w-1/2  flex justify-center text-center">
              <div className="flex flex-col items-center self-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check className="text-green-500 w-8 h-8" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Thank You for Your Submission!
                </h1>

                <div className="w-fit p-4 border border-gray-200 rounded-md mb-6 flex items-center">
                  <Check className="text-green-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Your application has been received successfully.
                  </p>
                </div>

                <p className="text-[#4B5563] text-sm mb-2 max-w-[460px] font-light">
                  Our compliance team will review your submission within
                  <span className="font-semibold"> 24-48 hours</span>. You'll be
                  notified via email once your account is verified and
                  activated.
                </p>
              </div>
            </div>

            {/* Right Side - Next Steps */}
            <div className="w-full lg:w-1/2  self-center  bg-[#FAFAFA] p-8 lg:p-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                What happens next?
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-sembold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-gray-900 mb-1">
                      Review Process
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our team will verify all the information and documents
                      you've provided.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-sembold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-gray-900 mb-1">
                      Email Confirmation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      You'll receive an email notification once your account is
                      verified and activated.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-sembold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-gray-900 mb-1">
                      Access Your Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Once approved, you'll have full access to create and
                      manage your development projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#6882C1] flex justify-between p-8 rounded-2xl overflow-hidden ">
          <div className=" max-w-[476.34px] text-white space-y-4 flex flex-col items-start self-center ">
            <h2 className="text-xl font-semibold mb3">
              Want to explore the Developer Dashboard?
            </h2>

            <p className="text-blue-100 text-sm">
              While you wait for verification, you can explore the Developer
              Dashboard in view-only mode to get familiar with the platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => goTo(ROUTES.DASHBOARD.DEVELOPER.HOME)}
                className=" text-black  flex items-center gap-2 rounded-full z20"
              >
                Explore Dashboard <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="bg-[#8697C1] hover:bg-[#8697C1]/60 text-white border-[#8697C1]/70 px-6 flex items-center gap-2 rounded-full"
              >
                Contact Support <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <img src={IMAGES.ThankyouBg} className="w-[212px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperOnboardingKYCConfirmation;
