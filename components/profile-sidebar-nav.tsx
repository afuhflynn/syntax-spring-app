"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Code,
  Github,
  Home,
  LayoutDashboard,
  Settings,
  Trophy,
  Users,
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

export function ProfileSidebarNav({ className }: ProfileSidebarNavProps) {
  const { user } = useUserStore();
  const pathname = usePathname();

  const mainNavItems = [
    {
      title: "Overview",
      href: `/dashboard/${user?.username}/profile`,
      icon: Home,
    },
    {
      title: "Challenges",
      href: `/dashboard/${user?.username}/profile/challenges`,
      icon: Code,
    },
    {
      title: "Activity",
      href: `/dashboard/${user?.username}/profile/activity`,
      icon: BarChart2,
    },
    {
      title: "Achievements",
      href: `/dashboard/${user?.username}/profile/achievements`,
      icon: Trophy,
    },
  ];

  const communityNavItems = [
    {
      title: "Community",
      href: `/platform/community`,
      icon: Users,
    },
    {
      title: "GitHub",
      href: `https://github.com/afuhflynn/syntax-spring-app`,
      icon: Github,
      external: true,
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Profile
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
                        {item.title}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="hidden md:block">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <Separator />
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Community
          </h2>
          <div className="space-y-1">
            {communityNavItems.map((item) => (
              <TooltipProvider key={item.href} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size="sm"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                        {item.external && (
                          <span className="sr-only">(opens in new tab)</span>
                        )}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="hidden md:block">
                    {item.title}
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
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href={`/dashboard/${user?.username}/settings/profile`}>
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
