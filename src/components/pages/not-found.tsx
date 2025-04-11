import { ArrowLeft } from "iconsax-react";
import { Button } from "../ui/button";
import { useCanGoBack, useRouter } from "@tanstack/react-router";

const NotFoundPage = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Sorry, the page not found
          </h1>
          <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            It is looking like you may have taken a wrong turn. Don&apos;t
            worry... it
            <br className="hidden sm:inline-block" />
            happens to the best of us. Just click the button below to get back
            on track.
          </p>
          {!canGoBack ? (
            <Button
              className="mt-8 !px-4 !py-2 !rounded-full !w-fit"
              onClick={() => router.history.back()}
            >
              <span className="flex gap-2 items-center">
                <ArrowLeft size={32} color="#000000" className="h-4 w-4" />
                <span>Go Back</span>
              </span>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
