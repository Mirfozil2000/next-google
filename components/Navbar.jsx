"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <Link className="text-lg font-bold text-blue-700" href={"/"}>
        Home
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="px-6 py-2 text-white rounded-md bg-slate-900"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-6 py-2 text-white rounded-md bg-slate-900"
        >
          Sign In
        </button>
      )}
    </div>
  );
}