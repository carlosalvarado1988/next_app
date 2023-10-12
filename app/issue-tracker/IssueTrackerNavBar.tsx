"use client";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

export const IssueTrackerNavBar = () => {
  const currentPathname = usePathname();
  const links = [
    { label: "Dashboard", href: "/issue-tracker" },
    { label: "Issues", href: "/issue-tracker/issues" },
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
              href={link.href}
              className={classnames({
                "text-zinc-900": currentPathname === link.href,
                "text-zinc-500": currentPathname !== link.href,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
