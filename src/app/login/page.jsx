"use client";

import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Email & password required");
      return;
    }

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);

    // You can call an API here
    // await loginUser({ email, password })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl p-6 border-0">
        <h3 className="text-3xl font-semibold text-center mb-1">Welcome back</h3>
        <p className="text-lg text-center mb-4">Please login</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <fieldset className="space-y-2">
            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-center text-sm">{error}</p>
            )}

            {/* Email */}
            <label className="label font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full border-0 bg-base-200 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <label className="label font-medium">Password</label>
            <input
              type="password"
              className="input input-bordered w-full border-0 bg-base-200 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot Password */}
            <div>
              <Link href='/' className="btn link link-hover text-sm">Forgot password?</Link>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full p-1.5 bg-green-500">Login</button>
          </fieldset>

          {/* Register Link */}
          <p className="text-center text-sm mt-2">
            Register Yourself?{" "}
            <Link
              href="/register"
              className="text-blue-500 underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
