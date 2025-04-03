"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { UserButton } from "./user-button";
import useUserStore from "@/lib/user.store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<null | HTMLDivElement>(null);
  const { isAuthenticated } = useUserStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleToggleMobileNav = (e: any) => {
      if (
        mobileNavRef &&
        mobileNavRef.current &&
        mobileNavRef.current.contains(e.target)
      ) {
        return;
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleToggleMobileNav);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleToggleMobileNav);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Challenges", path: "/platform/challenges" },
    { name: "Community", path: "/platform/community" },
    { name: "About", path: "/platform/about" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {!isAuthenticated && item.name === "Home" ? (
                <>
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5,
                      }}
                    />
                  )}
                </>
              ) : (
                item.name !== "Home" && (
                  <>
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </>
                )
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated && <ThemeToggle />}
          {isAuthenticated ? (
            <UserButton />
          ) : (
            <>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hidden md:flex"
              >
                <Link href="/auth/log-in">Log in</Link>
              </Button>
              <Button asChild className="hidden md:flex">
                <Link href="/auth/sign-up">Get started for free</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            ref={mobileNavRef}
            className="md:hidden border-t"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors w-auto hover:text-primary py-2",
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <Button variant="secondary">Log out</Button>
              ) : (
                <>
                  <Button variant="outline" size="lg" asChild className="flex">
                    <Link href="/auth/log-in">Log in</Link>
                  </Button>
                  <Button asChild className="flex">
                    <Link href="/auth/sign-up">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
