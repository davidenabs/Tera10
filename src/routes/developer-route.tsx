import { ROUTES } from "@/config/route";
import { CustomRouteObject } from "@/types/route.type";
import DashboardLayout from "@/layouts/dashboard-layout";
import DeveloperDashboard from "@/features/dashboard/developer/index.lazy";
import AddAsset from "@/features/dashboard/developer/add-asset/index.lazy";
import Portfolio from "@/features/dashboard/developer/portfolio";
import Listings from "@/features/dashboard/developer/listings";
import Wallet from "@/features/dashboard/developer/wallet";
import Milestone from "@/features/dashboard/developer/milestone";

export const developerRoutes: CustomRouteObject[] = [
  {
    path: ROUTES.DASHBOARD.DEVELOPER.HOME,
    element: <DeveloperDashboard />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.DEVELOPER.ADD_ASSETS,
    element: <AddAsset />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.DEVELOPER.PORTFOLIO,
    element: <Portfolio />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.DEVELOPER.LISTING,
    element: <Listings />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.DEVELOPER.MILESTONE,
    element: <Milestone />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.DEVELOPER.WALLET,
    element: <Wallet />,
    layout: DashboardLayout,
  },
];
