"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex bg-slate-200 p-5 space-x-3">
      <Link href={"/"} className="mr-5">
        Logo
      </Link>
      <Link href={"/exploring-next"} className="mr-5">
        Playground
      </Link>
    </nav>
  );
};
