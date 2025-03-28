import { Metadata } from "next";
import { DashboardSideBar } from "@/components/dashboard-side-bar";
import { DashboardNavBar } from "@/components/dashboard-navbar";

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
    <div
      className={`w-screen h-screen flex max-h-screen overflow-x-scroll bg-background`}
    >
      {/* Sidebar */}
      <DashboardSideBar />
      <main className="flex-1 h-full overflow-auto">
        <DashboardNavBar />
        {children}
      </main>
    </div>
  );
}
