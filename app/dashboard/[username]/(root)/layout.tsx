import { Metadata } from "next";
import { DashboardSideBar } from "@/components/dashboard-side-bar";
import { DashboardNavBar } from "@/components/dashboard-navbar";
import { MobileDashboardSidebar } from "@/components/mobile-dashboard-side-bar";

export const metadata: Metadata = {
  title: "Dashboard | Syntax Spring",
  description: "User dashboard @ syntax spring",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full h-full flex bg-background`}>
      {/* Sidebar */}
      <DashboardSideBar />
      <MobileDashboardSidebar />
      <main className="flex-1 h-full overflow-auto">
        <DashboardNavBar />
        {children}
      </main>
    </div>
  );
}
