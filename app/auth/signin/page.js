'use client';

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center font-mono text-center">
      <div>
        <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
        <p className="text-gray-600 mt-2 mb-6">Sign in to continue tracking your habits.</p>
        <button
          onClick={() => signIn('google')}
          className="bg-black text-white px-6 py-2 rounded-full hover:scale-110 transition-transform"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
