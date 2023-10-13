"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const NavBarExploringNext = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex bg-slate-200 p-5 space-x-6">
      <Link href={"/exploring-next/"} className="mr-5">
        NextJS
      </Link>
      <Link href={"/exploring-next/register"}>Register</Link>
      <Link href={"/exploring-next/users"}>Users</Link>
      <Link href={"/exploring-next/images-page"}>Images</Link>
      <Link href={"/exploring-next/upload"}>Upload</Link>
      <Link href={"/exploring-next/products"}>Products</Link>

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
    </nav>
  );
};
