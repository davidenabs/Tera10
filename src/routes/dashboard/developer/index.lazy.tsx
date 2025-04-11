import DeveloperDashboardPage from "@/components/pages/dashboard/developer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/developer/")({
  component: RouteComponent, 
});

function RouteComponent() {
  return <DeveloperDashboardPage />;
}
