"use client";

import Link from "next/link";
import { LayoutDashboard, LogOut, Settings, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserAccountNavProps {
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  } | null;
}

export const UserButton = ({ user }: UserAccountNavProps) => {
  // If no user is provided, use a default dev user in development mode
  const displayUser = user || null;

  if (!displayUser) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={displayUser.image || ""}
              alt={displayUser.name || "User"}
            />
            <AvatarFallback>
              {displayUser.name
                ? displayUser.name.charAt(0).toUpperCase()
                : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {displayUser.name && (
              <p className="font-medium">{displayUser.name}</p>
            )}
            {displayUser.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {displayUser.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={`/dashboard/${user?.name}`}>
            <LayoutDashboard className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={`/dashboard/${user?.name}/profile`}>
            <UserIcon className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={`/dashboard/${user?.name}/settings`}>
            <Settings className="w-4 h-4 mr-2" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mt-2" />
        <DropdownMenuItem
          className="cursor-pointer text-red-600 hover:text-red-500"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
