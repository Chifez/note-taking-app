import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar.js";
import MainBar from "./components/mainbar/mainbar.js";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState();
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const onUpdateNote = (updatedNote) => {
    const updatedNotesList = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesList);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        // onAddNote={onAddNote}
        // onDelete={onDelete}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <MainBar
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes={notes}
        setNotes={setNotes}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
