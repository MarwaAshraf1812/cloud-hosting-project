import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

function Page() {
  return (
    <div className="fixed_height min-h-screen flex items-center justify-center bg-gray-100">
      <div className="py-10 px-8 flex flex-col items-center justify-center shadow-lg w-full max-w-md bg-white rounded-lg">
        <h1 className="text-3xl text-blue-500 text-center font-bold mb-7">
          Create New Account
        </h1>
        <RegisterForm />
        <p className="mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
