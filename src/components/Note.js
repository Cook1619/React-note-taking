import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h1> {note.title} </h1>
        <h6> {note.body} </h6>
      </div>
    </div>
  );
};

export default Note;
