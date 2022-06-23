import React from "react";

import InputBar from "./inputbar.js";
import PreviewBar from "./previewbar.js";

const MainBar = ({
  notes,
  setNotes,
  activeNote,
  setActiveNote,
  onUpdateNote,
}) => {
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="mainbar">
      <InputBar
        activeNote={getActiveNote()}
        setActiveNote={setActiveNote}
        notes={notes}
        setNotes={setNotes}
        onUpdateNote={onUpdateNote}
      />
      <PreviewBar
        activeNote={getActiveNote()}
        setActiveNote={setActiveNote}
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  );
};

export default MainBar;
