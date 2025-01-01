"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchArticleInput() {
    const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchQuery);
    router.push(`/articles/search?searchQuery=${searchQuery}`);
  };

  return (
    <form className="w-full flex justify-center mb-5" onSubmit={handleSubmit}>
      <div className="relative w-full max-w-4xl">
        <input
          type="search"
          className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
          placeholder="Search for an article"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </form>
  );
}

export default SearchArticleInput;
