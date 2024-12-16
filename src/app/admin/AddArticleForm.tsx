"use client";
import React, { useState } from "react";
import {toast } from 'react-toastify';

function AddArticleForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      return toast.error('Please fill in all fields ');
    }
    console.log(title, description);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      
      <div className="flex flex-col mb-5">
        <label
          htmlFor="title"
          className="mb-2 text-sm text-gray-700 font-medium"
        >
          Title
        </label>
        <input
          type="text"
          className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="email1"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-6">
        <label
          className="mb-2 text-sm text-gray-700 font-medium"
        >
          Description
        </label>
        <textarea
          className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={5}
          placeholder="Enter Article description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
      >
        Add New Article
      </button>
    </form>
  );
}

export default AddArticleForm;
