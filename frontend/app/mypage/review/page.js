"use client";
import React, { useState, useEffect } from "react";

const Note = ({ name, roast, detail, process }) => (
  <div className="p-4 m-2 bg-white rounded shadow-lg w-60">
    <h2 className="font-bold text-xl mb-2">{name}</h2>
    <p>
      <strong>Roast:</strong> {roast}
    </p>
    <p>
      <strong>Detail:</strong> {detail}
    </p>
    <p>
      <strong>Process:</strong> {process}
    </p>
  </div>
);

export default function Home() {
  const [page, setPage] = useState(0);
  const notesPerPage = 6;

  const data = [
    {
      name: "Note 1",
      roast: "Roast 1",
      detail: "Detail 1",
      process: "Process 1",
    },
    {
      name: "Note 2",
      roast: "Roast 2",
      detail: "Detail 2",
      process: "Process 2",
    },
    {
      name: "Note 3",
      roast: "Roast 3",
      detail: "Detail 3",
      process: "Process 3",
    },
    {
      name: "Note 4",
      roast: "Roast 4",
      detail: "Detail 4",
      process: "Process 4",
    },
    {
      name: "Note 5",
      roast: "Roast 5",
      detail: "Detail 5",
      process: "Process 5",
    },
    {
      name: "Note 6",
      roast: "Roast 6",
      detail: "Detail 6",
      process: "Process 6",
    },
  ];

  const totalNotes = data.length;
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  const paginatedData = data.slice(
    page * notesPerPage,
    (page + 1) * notesPerPage
  );

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap justify-center">
        {paginatedData.map((note, index) => (
          <Note key={index} {...note} />
        ))}
      </div>
      <div className="mt-10">
        <button
          onClick={() => setPage(page > 0 ? page - 1 : page)}
          className="px-3 py-2 mx-2 bg-blue-500 text-white rounded-md"
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page < totalPages - 1 ? page + 1 : page)}
          className="px-3 py-2 mx-2 bg-blue-500 text-white rounded-md"
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
