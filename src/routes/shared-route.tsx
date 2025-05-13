import { ROUTES } from "@/config/route";
import WebsiteHomePage from "@/features/website/home/index.lazy";
import { CustomRouteObject } from "@/types/route.type";

export const sharedRoutes: CustomRouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <WebsiteHomePage />,
    // layout: DirectorMainLayout,
  },
];
