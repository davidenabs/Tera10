import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/route";
import useDashboardTitle from "@/hooks/use-page-title";
import { useNavigation } from "@/utils/navigation";

const HomePage = () => {
  useDashboardTitle("Home Page");
  const { goTo } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Header/Navigation Bar */}
      <header className="container mx-auto flex justify-between items-center py-6">
        <img src={IMAGES.appLogoWhite} alt="" />

        <nav>
          <Button
            variant="link"
            onClick={() => goTo(ROUTES.AUTH.LOGIN)}
            className="text-white"
          >
            FOR DEVELOPERS
          </Button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto mb-36 z-10">
          <h1 className="text-6xl font-normal mb-4 tracking-wider">
            Ease to build and own
          </h1>
          <p className="text-sm mb-8 !text-[#AEAEAE]">
            Build wealth with bricks, one investment at a time
          </p>
          <Button
            type="button"
            onClick={() => goTo(ROUTES.ONBOARDING.DEVELOPER.EMAIL)}
            className="text-black rounded-full font-bold"
          >
            Get Started
          </Button>
        </div>
      </main>

      {/* Building Image with Crane */}
      <div className="relative w-full h-80">
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className=" absolute -bottom-100 -left-56">
              <img src={IMAGES.Building} className="w-[1292px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
