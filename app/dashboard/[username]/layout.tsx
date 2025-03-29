import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Syntax Spring",
  description: "User dashboard @ syntax spring",
};

export default function MainDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`w-full h-full overflow-hidden`}>{children}</div>;
}
