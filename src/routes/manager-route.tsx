import { ROUTES } from "@/config/route";
import { CustomRouteObject } from "@/types/route.type";
import DashboardLayout from "@/layouts/dashboard-layout";
import ManagerDashboard from "@/features/dashboard/manager/index.lazy";
import Approval from "@/features/dashboard/manager/approvals.lazy";
import Market from "@/features/dashboard/manager/market.lazy";
import Communication from "@/features/dashboard/manager/communication.lazy";
import Insight from "@/features/dashboard/manager/insight.lazy";
import Profile from "@/features/dashboard/manager/profile.lazy";

export const managerRoutes: CustomRouteObject[] = [
  {
    path: ROUTES.DASHBOARD.MANAGER.HOME,
    element: <ManagerDashboard />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.MANAGER.APPROVALS,
    element: <Approval />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.MANAGER.MARKETS,
    element: <Market />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.MANAGER.COMMUNICATION,
    element: <Communication />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.MANAGER.INSIGHT,
    element: <Insight />,
    layout: DashboardLayout,
  },
  {
    path: ROUTES.DASHBOARD.MANAGER.PROFILE,
    element: <Profile />,
    layout: DashboardLayout,
  },
];
