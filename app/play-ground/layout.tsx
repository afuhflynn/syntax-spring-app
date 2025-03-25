import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { getChallengeBySlug } from "@/lib/challenges";
import devLog from "@/lib/devLog";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(params: {
  slug: string;
}): Promise<Metadata> {
  devLog(params.slug);
  const challenge = getChallengeBySlug(params.slug);

  if (!challenge) {
    return {
      title: "Challenge Not Found",
    };
  }

  return {
    title: `${challenge.title} | Syntax Spring`,
    description: challenge.description.substring(0, 160),
  };
}

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
