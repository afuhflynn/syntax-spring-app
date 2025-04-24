"use client";

import { LayoutDashboardIcon, Search } from "lucide-react";
import { Input } from "./ui/input";
import { UserButton } from "./user-button";
import { ThemeToggle } from "./theme-toggle";
import { useStore } from "@/lib/store";
import { Button } from "./ui/button";

export const DashboardNavBar = () => {
  const { setIsMobileDashboardSidebar } = useStore();
  return (
    <header className="flex h-14 items-center bg-background bg-opacity-40 z-10 border-b px-4 sticky top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        {/* Mobile sidebar toggle */}
        <Button
          className="md:hidden mx-0 px-0"
          variant="ghost"
          onClick={() => setIsMobileDashboardSidebar(true)}
        >
          <LayoutDashboardIcon />
        </Button>
        <span className="font-medium hidden md:block">
          Check out your achievements
        </span>
        <div className="relative md:block hidden">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Have a challenge in mind?"
            className="h-9 w-[300px] rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
};
