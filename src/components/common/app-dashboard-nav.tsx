import { useAtom } from "jotai";
import { appAtom } from "@/stores/app";
import IMAGES from "@/assets/images";

export function AppDashboardNav() {
  const [app] = useAtom(appAtom);

  return (
    <nav className="flex justify-between pb10 p-6">
      <div className="text-lg font-semibold">
        {app.dashboardTitle || "Dashboard"}
      </div>

      <div className="space-x-3 flex items-center">
        <div className="relative">
          <img
            src={IMAGES.avatar}
            className="w-[40px] h-[40px] rounded-full"
            alt=""
          />
          <span className="absolute bottom-1 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div className="flex-col gap-2 text-[#475467]">
          <div className="font-medium text-sm">Cosgrove</div>
          <div className="text-xs">olivia@cosgroove.ng</div>
        </div>
      </div>
    </nav>
  );
}
