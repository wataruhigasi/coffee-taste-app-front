"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the new user registration
    console.log("New user:", username, password);
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded shadow w-96 h-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="button"
            className="bg-yellow-900 text-white font-bold py-2 px-4 rounded"
          >
            <Link href="/mypage">Login</Link>
          </button>
          <button
            type="button"
            className="bg-yellow-900 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-4 rounded shadow w-96 h-96">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Username:
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
