export const postJoke = async (joke) => {
  const jokeObj = {
    text: joke,
    told: false,
  };

  const postInput = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  };

  const response = await fetch("http://localhost:8088/jokes", postInput);
};

export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((res) => res.json());
};
