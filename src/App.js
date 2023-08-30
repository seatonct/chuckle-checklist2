import "./App.css";
import { postJoke, getAllJokes } from "./services/jokeService";
import { useEffect, useState } from "react";

export const App = () => {
  const [newJoke, setNewJoke] = useState([]);
  const [allJokes, setAllJokes] = useState([]);

  const getAndSetJokes = () => {
    const jokesArray = getAllJokes;
    setAllJokes(jokesArray);
  }; //used to get jokes from database and assign them to the allJokes array.
  //This function needs to run on the initial page render and after a new joke save is completed.

  useEffect(() => {
    setNewJoke("");
  }, [allJokes]); //clears the input field

  return (
    <>
      <h1>Chuckle Checklist</h1>
      <h2>Add Joke</h2>
      <div>
        <input
          className=""
          type="text"
          value={newJoke}
          placeholder="New One Liner"
          onChange={(event) => {
            setNewJoke(event.target.value);
          }}
        />
        <button
          onClick={(click) => {
            postJoke(newJoke).then(getAndSetJokes());
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};
//Add list of jokes to DOM.
