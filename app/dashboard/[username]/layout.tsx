import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Syntax Spring",
  description: "User dashboard @ syntax spring",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`w-screen h-screen`}>{children}</div>;
}
