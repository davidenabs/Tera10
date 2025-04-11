import { AppDashboardNav } from "@/components/common/app-dashboard-nav";
import { AppSidebar } from "@/components/common/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  // const cookieStore = await cookies()
  // const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
 
  return (
    <SidebarProvider className="bg-[#FAFAFA] border-0 ">
      <AppSidebar />
      <SidebarInset className=""> 
        <SidebarTrigger />
        <AppDashboardNav />
        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
