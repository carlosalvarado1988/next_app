import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex bg-slate-300 p-5 space-x-6">
      <Link href={"/"} className="mr-5">
        Logo
      </Link>
      <Link href={"/issue-tracker"} className="mr-5">
        Issue tracker
      </Link>
      <Link href={"/exploring-next"} className="mr-5">
        Playground
      </Link>
    </nav>
  );
};
