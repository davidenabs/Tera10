import IMAGES from "@/assets/images";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div
      className="flex min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${IMAGES.authBg})` }}
    >
      {/* Left side - Auth Form */}
      <div className="w-full md:w-1/2 bg-white p-8 m-2 rounded-lg relative">
        <div>
          <div className="mb-12">
            <img src={IMAGES.appLogo} alt="" />
          </div>

          {children}

          <div className="absolute bottom-0 right-8 left-8 text-xs text-gray-500 flex gap-4 border-t-[0.5px] py-3 ">
            <span>Secured by Tera10 Capital Investment</span>
            <span>Licensed by SEC & CBN</span>
          </div>
        </div>
      </div>

      {/* Right side - Image with Text */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-brfrom-blue-900 to-teal-600 relative">
        <div className="absolute inset-0 bg-cover bg-center">
          <div className="absolute inset-0 bgblack bg-opacity-20"></div>
          <div className="absolute bottom-20 left-10 right-10 text-white">
            <h2 className="text-6xl font-bold mb-2">
              <span className="italic">Ease to</span>
              <div className="text-[120px]">build & own</div>
            </h2>
            <p className="text-[26px] mt-4 text-white/70">
              We are helping developers access funds faster & easier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
