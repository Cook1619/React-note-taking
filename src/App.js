import React, { useState } from "react";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import "./App.css";

function App() {
  const notes = [
    {
      id: 1,
      title: "My first note",
      body:
        "This is the body of my first note I'm using for my note taking application, I hope you like it the most out of all of them.",
      author: "Tim",
      comments: [
        {
          body: "That was a really good note",
          author: "Billy",
        },
        {
          body:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis?",
          author: "Lilly",
        },
      ],
    },
    {
      id: 2,
      title: "This is my second note",
      body:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus excepturi enim corporis repellat, dolore sed magni deleniti eius suscipit.",
      author: "Billy",
      comments: [
        {
          body:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, molestiae?",
          author: "Phil",
        },
        {
          body: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          author: "Darren",
        },
      ],
    },
  ];

  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const searchedTitles = notes.filter((note) => {
    console.log("is this running");
    return note.title.toLowerCase().includes(title.toLowerCase());
  });

  return (
    <div className="App">
      <h1>My Note Taking Application</h1>
      <Search handleChange={handleInputChange} />
      <NoteList search={title} notes={searchedTitles} />
    </div>
  );
}

export default App;
