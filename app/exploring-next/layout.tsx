import type { Metadata } from "next";
import { NavBarExploringNext } from "./NavBarExploringNext";

export const metadata: Metadata = {
  title: "My NextJS App",
  description: "My NextJS app for exploring concepts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBarExploringNext />
      <main className="p-5">{children}</main>
    </div>
  );
}
// <html lang="en" data-theme="winter">
//   <body>
