"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <header className="flex bg-slate-200 p-5 space-x-3">
      <Link href={"/"} className="mr-5">
        NextJS
      </Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/images-page"}>Images</Link>
      <Link href={"/upload"}>Upload</Link>
      <Link href={"/products"}>Products</Link>

      {status === "loading" && <div>...</div>}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </header>
  );
};
