"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import useUserStore from "@/lib/user.store";

export const DashboardSideBar = () => {
  const { user } = useUserStore();
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r bg-muted/10 hidden md:block">
      {/* Desktop sidebar */}
      <div className="mt-2 w-full flex flex-row items-center ml-2">
        <Logo />
      </div>
      <div className="px-3 py-2 pt-8">
        <nav className="space-y-1">
          <Link
            href={`/dashboard/${user?.username}`}
            className={`flex items-center gap-3 rounded-md ${
              pathname === `/dashboard/${user?.username}` ? "bg-muted" : ""
            } px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-dashboard"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Dashboard
          </Link>

          <Link
            href={`/dashboard/${user?.username}/challenges`}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
              pathname === `/dashboard/${user?.username}/challenges`
                ? "bg-muted"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-folder"
            >
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            </svg>
            My Challenges
          </Link>
        </nav>
        <div className="py-4 mt-2">
          <h3 className="px-3 text-xs font-medium">Practice</h3>
          <nav className="mt-2 space-y-1">
            <Link
              href="/platform/challenges"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Choose a Challenge
            </Link>

            <Link
              href="/play-ground/editor"
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-terminal"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" x2="20" y1="19" y2="19" />
              </svg>
              Playground (IDE)
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
};
