import { Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Outlet />
    </div>
  );
}
