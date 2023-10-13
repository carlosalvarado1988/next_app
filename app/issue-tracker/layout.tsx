import type { Metadata } from "next";

import { IssueTrackerNavBar } from "./IssueTrackerNavBar";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "an app to track issues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <IssueTrackerNavBar />
      <main className="p-5">{children}</main>
    </div>
  );
}
