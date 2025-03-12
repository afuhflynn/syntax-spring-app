"use client";

import Hero from "@/components/hero-section";
import Features from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import CTA from "@/components/cta-section";

export default function Home() {
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
