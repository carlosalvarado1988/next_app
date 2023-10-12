import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { NavBarExploringNext } from "./NavBarExploringNext";
import AuthProvider from "../auth/Provider";

export const metadata: Metadata = {
  title: "My NextJS App",
  description: "My NextJS app for exploring concepts",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AuthProvider>
        <NavBarExploringNext />
        <main className="p-5">{children}</main>
      </AuthProvider>
    </div>
  );
}
