import React from "react";
import Link from "next/link";

export const IssueTrackerNavBar = () => {
  return (
    <nav className="flex bg-slate-200 p-5 space-x-3">
      <Link href={"/issue-tracker/"} className="mr-5">
        Logo
      </Link>
      <ul>
        <li>
          <Link href={"/issue-tracker/register"}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};
