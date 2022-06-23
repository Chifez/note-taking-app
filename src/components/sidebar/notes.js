import React from "react";

const Notes = ({ notes, activeNote, setActiveNote, onDelete }) => {
  const sortNoteArray = notes.sort((a, b) => b.lastUpdated - a.lastUpdated);
  return (
    <ul className="note-lists">
      {sortNoteArray.map((note) => (
        <li
          key={note.id}
          className={`note-list ${note.id === activeNote && "active"}`}
          onClick={() => setActiveNote(note.id)}
        >
          <div className="note-item">
            <h3> {note.title} </h3>
            <p> {note.body && note.body.substr(0, 35) + "..."}</p>
            <p>
              last modified at{" "}
              {new Date(note.lastUpdated).toLocaleDateString("default", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <button onClick={() => onDelete(note.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
