"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Shield,
  Bell,
  Monitor,
  Code,
  Key,
  Keyboard,
  Palette,
  Zap,
  Terminal,
  Globe,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dummyUserName = "afuhflynn";

  const settingsSections = [
    {
      name: "Profile",
      path: `/dashboard/${dummyUserName}/settings/profile`,
      icon: User,
    },
    {
      name: "Account",
      path: `/dashboard/${dummyUserName}/settings`,
      icon: Shield,
    },
    {
      name: "Appearance",
      path: `/dashboard/${dummyUserName}/settings/appearance`,
      icon: Palette,
    },
    {
      name: "Notifications",
      path: `/dashboard/${dummyUserName}/settings/notifications`,
      icon: Bell,
    },
    {
      name: "Editor",
      path: `/dashboard/${dummyUserName}/settings/editor`,
      icon: Code,
    },
    {
      name: "Terminal",
      path: `/dashboard/${dummyUserName}/settings/terminal`,
      icon: Terminal,
    },
    {
      name: "Security",
      path: `/dashboard/${dummyUserName}/settings/security`,
      icon: Key,
    },
    {
      name: "Integrations",
      path: `/dashboard/${dummyUserName}/settings/integrations`,
      icon: Zap,
    },
    {
      name: "Display",
      path: `/dashboard/${dummyUserName}/settings/display`,
      icon: Monitor,
    },
    {
      name: "Accessibility",
      path: `/dashboard/${dummyUserName}/settings/accessibility`,
      icon: Keyboard,
    },
    {
      name: "Language",
      path: `/dashboard/${dummyUserName}/settings/language`,
      icon: Globe,
    },
    {
      name: "Data",
      path: `/dashboard/${dummyUserName}/settings/data`,
      icon: Database,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 w-full h-full overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="sticky top-6 space-y-1 rounded-lg border bg-card p-2">
            {settingsSections.map((section) => {
              const Icon = section.icon;
              const isActive = pathname === section.path;

              return (
                <Link
                  key={section.path}
                  href={section.path}
                  className={cn(
                    "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{section.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="settings-indicator"
                      className="ml-auto h-2 w-2 rounded-full bg-primary-foreground"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Settings Content */}
        <div className="flex-1 h-full rounded-lg border bg-card">
          {children}
        </div>
      </div>
    </div>
  );
}
