import type React from "react";
import type { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProfileSidebarNav } from "@/components/profile-sidebar-nav";

export const metadata: Metadata = {
  title: "Profile | Syntax Spring",
  description: "View and manage your Syntax Spring profile",
};

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <ProfileSidebarNav />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
