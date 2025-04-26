import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function App() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAddNote() {
    if (inputText.trim() === "") return;

    const lines = inputText.split("\n");
    const title = lines[0];
    const content = lines.slice(1).join("\n");

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInputText("");
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <div className="note-input">
        <h1>Title a Note</h1>
        <textarea
          placeholder={"Title\nTake a note..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows="5"
        />
        <button className="add-button" onClick={handleAddNote}>
          Add
        </button>
      </div>

      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={handleDeleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
