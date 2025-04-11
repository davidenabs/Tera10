import ReactQueryProvider from "@/providers/react-query";
import { Toaster } from "@/utils/toast";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { LoadingBarContainer } from "react-top-loading-bar";

export const Route = createRootRoute({
  component: () => (
    <>
      <ReactQueryProvider>
      <LoadingBarContainer>
        <Toaster />
        <Outlet />
        <TanStackRouterDevtools />
        </LoadingBarContainer>
      </ReactQueryProvider>
    </>
  ),
});
