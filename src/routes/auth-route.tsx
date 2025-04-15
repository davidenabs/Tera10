import { ROUTES } from "@/config/route";
import { CustomRouteObject } from "@/types/route.type";
import AuthLayout from "@/layouts/auth-layout";
import MainLoginPage from "@/features/auth/login";
import ChangePassword from "@/features/auth/change-password";
import ForgotPassword from "@/features/auth/forgot-password";

export const authRoutes: CustomRouteObject[] = [
  {
    path: ROUTES.AUTH.LOGIN,
    element: <MainLoginPage />,
    layout: AuthLayout,
  },
  {
    path: ROUTES.AUTH.CHANGE_PASSWORD,
    element: <ChangePassword />,
    layout: AuthLayout,
  },
  {
    path: ROUTES.AUTH.FORGET_PASSWORD,
    element: <ForgotPassword />,
    layout: AuthLayout,
  },
];
