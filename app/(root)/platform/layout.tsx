import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform-Syntax Spring",
  description:
    "Master coding challenges in multiple languages with our interactive platform. Code directly in your browser and see results in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-full w-full flex-col">{children}</div>;
}
