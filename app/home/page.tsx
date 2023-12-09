// home.tsx

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CypherApp",
};

function HomePage() {
  const notes = [
    { id: 1, title: "Note 1", content: "This is the content of Note 1." },
    { id: 2, title: "Note 2", content: "This is the content of Note 2." },
    // Add more notes as needed
  ];

  const selectedNote = notes[0]; // For simplicity, selecting the first note

  return (
    <div className="flex bg-background min-h-screen">
      {/* Left Pane - Notes List */}
      <div className="w-1/4 bg-card p-4  shadow-md overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-primary">Notes</h2>
        <ul className="space-y-2">
          {notes.map((note) => (
            <li key={note.id} className="cursor-pointer hover:underline">
              {note.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Pane - Selected Note Content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4 text-accent-500">
          {selectedNote.title}
        </h1>
        <div className="bg-card rounded-lg shadow-md p-4">
          <p className="text-gray-500">{selectedNote.content}</p>
        </div>
      </div>

      {/* Right Pane - Backlinks */}
    </div>
  );
}

export default HomePage;
