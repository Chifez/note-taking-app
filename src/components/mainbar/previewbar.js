import React from "react";
import ReactMarkdown from "react-markdown";
const PreviewBar = ({ notes, setNotes, activeNote, setActiveNote }) => {
  console.log(typeof activeNote);
  console.log(typeof activeNote);
  return (
    <div className="preview-item">
      {activeNote !== undefined ? (
        <>
          <h3>{activeNote.title}</h3>
          <ReactMarkdown className="preview-body">
            {activeNote.body}
          </ReactMarkdown>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PreviewBar;
