import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `Playground | Syntax Spring`,
  description: "Challenge playground with code editor.",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`h-screen w-screen overflow-x-hidden ${inter.className}`}>
      {children}
    </div>
  );
}
