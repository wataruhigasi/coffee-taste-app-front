"use client";
import Link from "next/link";
import React, { useState } from "react";

const Mypage = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the new coffee addition here
    console.log("New coffee:", name);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-40">Menu</h1>
      <div className="flex flex-col space-y-12">
        <button
          className="bg-yellow-900 text-white font-bold py-4 px-6 rounded"
          onClick={() => setShowModal(true)}
        >
          New Coffee
        </button>
        <button className="bg-yellow-900 text-white font-bold py-4 px-6 rounded">
          <Link href="/mypage/review">Review Coffees</Link>
        </button>
      </div>

      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded shadow w-96 h-100">
              <h2 className="text-2xl font-bold mb-4">Add New Coffee</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypage;
