"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import devLog from "@/lib/devLog";

export const DashboardSideBar = () => {
  const dummyUser = "afuhflynn";
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const path = pathNameArray[pathNameArray.length - 1];
  devLog(path);
  return (
    <aside className="hidden w-64 border-r bg-muted/10 md:block">
      <Logo />
      <div className="px-3 py-2">
        <nav className="space-y-1">
          <Link
            href={`/dashboard/${dummyUser}`}
            className={`flex items-center gap-3 rounded-md ${
              path.trim() === "afuhflynn" ? "bg-muted" : ""
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
            href={`/dashboard/${dummyUser}/learning-paths`}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              path.trim() === "learning-paths" ? "bg-muted" : ""
            } hover:bg-muted hover:text-foreground`}
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
              className="lucide lucide-git-branch"
            >
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
              <path d="M12 12v3" />
            </svg>
            My Learning Paths
          </Link>

          <Link
            href={`/dashboard/${dummyUser}/challenges`}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
              path.trim() === "challenges" ? "bg-muted" : ""
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
