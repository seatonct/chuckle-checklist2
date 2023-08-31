import "./App.css";
import {
  postJoke,
  getAllJokes,
  toggleJokeTold,
  toggleJokeUntold,
  deleteJoke,
} from "./services/jokeService";
import { useEffect, useState } from "react";

export const App = () => {
  const [newJoke, setNewJoke] = useState([]);
  const [allJokes, setAllJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);

  const getAndSetJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }; //used to get jokes from database and assign them to the allJokes array.
  //This function needs to run on the initial page render and after a new joke save is completed.

  useEffect(() => {
    getAndSetJokes();
  }, []);

  useEffect(() => {
    const toldOnly = allJokes.filter((joke) => joke.told === true);
    setToldJokes(toldOnly);

    const untoldOnly = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(untoldOnly);
  }, [allJokes]);

  useEffect(() => {
    setNewJoke("");
  }, [allJokes]); //clears the input field

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <h2>Add Joke</h2>
      <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          value={newJoke}
          placeholder="New One Liner"
          onChange={(event) => {
            setNewJoke(event.target.value);
          }}
        />
        <button
          className="joke-input-submit"
          onClick={async () => {
            await postJoke(newJoke);
            getAndSetJokes();
          }}
        >
          Add
        </button>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>Untold</h2>
          {untoldJokes.map((joke) => {
            return (
              <div key={joke.id} className="joke-list-item">
                {joke.text}
                <button
                  className="joke-list-action-toggle"
                  onClick={() => {
                    toggleJokeTold(joke);
                    getAndSetJokes();
                  }}
                >
                  Told
                </button>
                <button
                  className="joke-list-action-delete"
                  onClick={() => {
                    deleteJoke(joke);
                    getAndSetJokes();
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="joke-list-container">
          <h2>Told</h2>
          {toldJokes.map((joke) => {
            return (
              <div key={joke.id} className="joke-list-item">
                {joke.text}
                <button
                  className="joke-list-action-toggle"
                  onClick={() => {
                    toggleJokeUntold(joke);
                    getAndSetJokes();
                  }}
                >
                  Untold
                </button>
                <button
                  className="joke-list-action-delete"
                  onClick={() => {
                    deleteJoke(joke);
                    getAndSetJokes();
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
