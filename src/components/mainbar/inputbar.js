import React from "react";

const InputBar = ({
  notes,
  setNotes,
  activeNote,
  setActiveNote,
  onUpdateNote,
}) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastUpdated: Date.now(),
    });
  };

  return (
    <form className="inputbar">
      {activeNote !== undefined ? (
        <>
          <input
            id="title"
            type="text"
            autoFocus
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
          />
          <textarea
            id="textarea"
            placeholder="write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
          ></textarea>
        </>
      ) : (
        <div className="no-notes">
          <p> No notes Added </p>
        </div>
      )}
    </form>
  );
};

export default InputBar;
