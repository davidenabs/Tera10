import { AppDashboardNav } from "@/components/common/app-dashboard-nav";
import { AppSidebar } from "@/components/common/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: props) {
  // const cookieStore = await cookies()
  // const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider className="bg-[#FAFAFA] border-0 ">
      <AppSidebar />
      <SidebarInset className="">
        <SidebarTrigger />
        <AppDashboardNav />
        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
