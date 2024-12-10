import Link from "next/link";
import React from "react";

function notFoundPage() {
  return (
    <section className="flex justify-center items-center flex-col py-2">
      <h1 className="text-4xl font-bold mt-2">404</h1>
      <p className="text-lg text-gray-500 mt-2">Page Not Found</p>
      <Link
        href="/"
        className="text-blue-400block mt-6 hover:text-indigo-700 underline"
      >
        Go to Home
      </Link>
    </section>
  );
}

export default notFoundPage;
