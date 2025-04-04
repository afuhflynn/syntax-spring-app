"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Code,
  Key,
  LayoutDashboard,
  Palette,
  Shield,
  Terminal,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useUserStore from "@/lib/user.store";

interface ProfileSidebarNavProps {
  className?: string;
}

export function SettingsSidebarNav({ className }: ProfileSidebarNavProps) {
  const { user } = useUserStore();
  const pathname = usePathname();

  const mainNavItems = [
    {
      name: "Profile",
      href: `/dashboard/${user?.username}/settings/profile`,
      icon: User,
    },
    {
      name: "Account",
      href: `/dashboard/${user?.username}/settings`,
      icon: Shield,
    },
    {
      name: "Appearance",
      href: `/dashboard/${user?.username}/settings/appearance`,
      icon: Palette,
    },
    {
      name: "Notifications",
      href: `/dashboard/${user?.username}/settings/notifications`,
      icon: Bell,
    },
    {
      name: "Editor",
      href: `/dashboard/${user?.username}/settings/editor`,
      icon: Code,
    },
    {
      name: "Terminal",
      href: `/dashboard/${user?.username}/settings/terminal`,
      icon: Terminal,
    },
    {
      name: "Security",
      href: `/dashboard/${user?.username}/settings/security`,
      icon: Key,
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <TooltipProvider key={item.href} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size="sm"
                      className={`w-full justify-start ${
                        pathname.toLowerCase() === item.href.toLowerCase()
                          ? "bg-muted"
                          : ""
                      }`}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="hidden md:block">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <Separator />
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Quick Actions
          </h2>
          <div className="space-y-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start mb-4"
              asChild
            >
              <Link href={`/dashboard/${user?.username}`}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/platform/challenges">
                <Code className="mr-2 h-4 w-4" />
                Start New Challenge
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
