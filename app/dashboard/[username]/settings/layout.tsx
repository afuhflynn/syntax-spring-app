import { ScrollArea } from "@/components/ui/scroll-area";
import { SettingsSidebarNav } from "@/components/settings-sidebar-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Syntax Spring",
  description: "View and manage your Syntax Spring settings and data",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <SettingsSidebarNav />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
