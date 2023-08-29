import "./App.css";
import { getAllJokes } from "./services/jokeService";
import { useEffect, useState } from "react";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);

  return (
    <>
      <h1>Chuckle Checklist</h1>
      <h3>Add Joke</h3>
      <div>
        <input
          className=""
          type="text"
          // value={/* What should go here? */}
          placeholder="New One Liner"
          onChange={(event) => {
            // What's the value of event?
          }}
        />
        <button>Add</button>
      </div>
    </>
  );
};
