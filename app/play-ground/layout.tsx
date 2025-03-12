import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { getChallengeBySlug } from "@/lib/challenges";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(params: {
  slug: string;
}): Promise<Metadata> {
  console.log(params.slug);
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
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
