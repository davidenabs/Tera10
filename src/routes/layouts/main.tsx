import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "react-router-dom";

export const Route = createFileRoute("/layouts/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}
