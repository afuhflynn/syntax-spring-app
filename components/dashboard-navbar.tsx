import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { UserButton } from "./user-button";
import { ThemeToggle } from "./theme-toggle";

export const DashboardNavBar = () => {
  const dummyUser = {
    name: "afuhflynn",
    email: "flyinnsafuh@gmail.com",
    image: "",
  };
  return (
    <header className="flex h-14 items-center bg-background bg-opacity-40 z-10 border-b px-4 sticky top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <span className="font-medium">Check out your achievements</span>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="What do you need to learn today?"
            className="h-9 w-[300px] rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <UserButton user={dummyUser} />
        <ThemeToggle />
      </div>
    </header>
  );
};
