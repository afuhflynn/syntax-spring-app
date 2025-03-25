import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syntax Spring - Interactive Coding Challenge Platform",
  description:
    "Master coding challenges in multiple languages with our interactive platform. Code directly in your browser and see results in real-time.",
  keywords: [
    "coding",
    "challenges",
    "programming",
    "learning",
    "education",
    "development",
    "javascript",
    "python",
    "java",
  ],
  authors: [{ name: "Syntax Spring Team" }],
  creator: "Syntax Spring",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syntaxspring.com",
    title: "Syntax Spring - Interactive Coding Challenge Platform",
    description:
      "Master coding challenges in multiple languages with our interactive platform.",
    siteName: "Syntax Spring",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntax Spring - Interactive Coding Challenge Platform",
    description:
      "Master coding challenges in multiple languages with our interactive platform.",
    creator: "@syntaxspring",
  },
  generator: "afuhflynn",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
