"use client";
import Hero from "@/components/hero-section";
import Features from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import CTA from "@/components/cta-section";
import { useEffect } from "react";
import useUserStore from "@/lib/user.store";
import { MainLoader } from "@/components/loader";
import { redirect } from "next/navigation";

export default function Home() {
  const { checkAuth, isCheckingAuth, user } = useUserStore();

  // Check user auth state on initial load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // TODO: Redirect user to dashboard page if user data exists
  if (user) {
    redirect(`/dashboard/${user.username}`);
  }

  if (isCheckingAuth) {
    return (
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-background z-80">
        <MainLoader text={"Please wait, do not refresh your browser."} />
      </div>
    );
  }
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
