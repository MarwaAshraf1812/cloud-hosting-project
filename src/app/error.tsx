"use client";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void; // to try again fetching data
}

function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center fixed_height">
      <div className="text-center pt-7">
        <h1 className="text-3xl text-red-500 font-semibold">
          something went wrong
        </h1>
        <p className="mt-6">Error Message : {error.message}</p>
        <button
          onClick={reset}
          className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700"
        >
          Try Again
        </button>
      </div>
      <Link
        href="/"
        className="text-blue-400block mt-6 hover:text-indigo-700 underline"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
