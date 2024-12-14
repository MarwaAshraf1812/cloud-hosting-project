"use client";
import React, { useState } from "react";
import {toast } from 'react-toastify';


function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !username) {
      return toast.error('Please fill in all fields ');
    }
    console.log(email, password);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      
      <div className="flex flex-col mb-5">
        <label
          htmlFor="email"
          className="mb-2 text-sm text-gray-700 font-medium"
        >
          Email
        </label>
        <input
          type="email"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="email1"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-5">
        <label
          htmlFor="username"
          className="mb-2 text-sm text-gray-700 font-medium"
        >
          username
        </label>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="username"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="password"
          className="mb-2 text-sm text-gray-700 font-medium"
        >
          Password
        </label>
        <input
          type="password"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
