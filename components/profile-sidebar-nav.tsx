"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  BookOpen,
  Code,
  FileCode,
  Github,
  GraduationCap,
  Home,
  MessageSquare,
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

interface ProfileSidebarNavProps {
  className?: string;
}

export function ProfileSidebarNav({ className }: ProfileSidebarNavProps) {
  const pathname = usePathname();

  const mainNavItems = [
    {
      title: "Overview",
      href: "/dashboard/profile",
      icon: Home,
    },
    {
      title: "Challenges",
      href: "/dashboard/profile/challenges",
      icon: Code,
    },
    {
      title: "Projects",
      href: "/dashboard/profile/projects",
      icon: FileCode,
    },
    {
      title: "Activity",
      href: "/dashboard/profile/activity",
      icon: BarChart2,
    },
    {
      title: "Achievements",
      href: "/dashboard/profile/achievements",
      icon: Trophy,
    },
    {
      title: "Learning Path",
      href: "/dashboard/profile/learning",
      icon: GraduationCap,
    },
  ];

  const communityNavItems = [
    {
      title: "Community",
      href: "/dashboard/community",
      icon: Users,
    },
    {
      title: "Discussions",
      href: "/dashboard/discussions",
      icon: MessageSquare,
    },
    {
      title: "Resources",
      href: "/dashboard/resources",
      icon: BookOpen,
    },
    {
      title: "GitHub",
      href: "https://github.com/syntax-spring-app",
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
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
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
                      variant={pathname === item.href ? "secondary" : "ghost"}
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
              <Link href="/dashboard/settings/profile">
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
