import AddAssetPage from "@/components/pages/dashboard/developer/add-asset";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/developer/add-asset/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddAssetPage />;
}
