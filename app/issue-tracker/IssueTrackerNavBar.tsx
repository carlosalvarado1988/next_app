import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

export const IssueTrackerNavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue Tracker", href: "/issue-tracker" },
  ];
  return (
    <nav className="flex space-x-6  bg-slate-100 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/issue-tracker/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
