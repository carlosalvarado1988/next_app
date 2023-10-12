"use client";
import { EventType } from "next-auth";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/register/`;
    console.log("endpoint", endpoint);
    const response: any = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    setLoading(false);
    if (response?.status == 400) return setError(true);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Register a user</h1>
      <form className="flex flex-col">
        <label className="mb-1">Name</label>
        <input
          className="input input-bordered w-full max-w-xs mb-4"
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label className="mb-1">Email</label>
        <input
          className="input input-bordered w-full max-w-xs mb-4"
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label className="mb-1">Password</label>
        <input
          className="input input-bordered w-full max-w-xs mb-4"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn btn-primary mb-3"
          onClick={handleRegister}
          disabled={!name || !email || !password}
        >
          Register
        </button>
      </form>
      {loading && <progress className="progress w-56"></progress>}
      <div className="toast toast-middle toast-end">
        {error && (
          <div className="alert alert-info">
            <span>An error occurred, try again</span>
          </div>
        )}
        {success && (
          <div className="alert alert-success">
            <span>User registered successfully.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
