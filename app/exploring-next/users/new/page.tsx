"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Implementing useRouter</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          router.push("/exploring-next/register");
        }}
      >
        Register a new user
      </button>
    </>
  );
};

export default NewUserPage;
