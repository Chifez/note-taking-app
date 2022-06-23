import React from "react";
import uuid from "react-uuid";
import Notes from "./notes.js";

const Sidebar = ({ notes, setNotes, activeNote, setActiveNote }) => {
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastUpdated: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDelete = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h3>Note-Taking-App</h3>
        <button onClick={onAddNote}>Add Note</button>
        <h4>
          {notes.length > 0 ? (
            "NOTE LIST"
          ) : (
            <div className="empty-note-list">
              <p className="no-note">empty note list</p>
            </div>
          )}
        </h4>
      </header>
      <Notes
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Sidebar;
