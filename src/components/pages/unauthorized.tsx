import { Button } from "@/components/ui/button";
import { ArrowLeft2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Unauthorized Access
          </h1>
          <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            You do not have the necessary permissions to view this page.
            <br className="hidden sm:inline-block" />
            Please contact your administrator if you believe this is an error.
          </p>

          <Button
            className="mt-8 !px-4 !py-2 !rounded-full !w-fit"
            onClick={() => navigate(-1)}
          >
            <span className="flex gap-2 items-center">
              <ArrowLeft2 size={18} color="#888888" />
              <span>Go Back</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
