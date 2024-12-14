import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

function Page() {
  return (
    <div className="fixed_height min-h-screen flex items-center justify-center bg-gray-100">
      <div className="py-10 px-8 flex flex-col items-center justify-center shadow-lg w-full max-w-md bg-white rounded-lg">
        <h1 className="text-3xl text-blue-500 text-center font-bold mb-7">
          Welcome Back
        </h1>
        <LoginForm />
        <p className="mt-5 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
