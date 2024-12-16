"use client";
import React, { useState } from "react";

function AddCommentForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <form className="w-full flex justify-center mb-5" onSubmit={handleSubmit}>
      <div className="relative w-full max-w-5xl">
        <input
          type="text"
          className="w-full p-4 pl-5 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 shadow-md"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none transition duration-200 ease-in-out"
        >
          Add Comment
        </button>
      </div>
    </form>
  );
}

export default AddCommentForm;
