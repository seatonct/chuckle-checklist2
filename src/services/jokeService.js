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

export const getAllJokes = async () => {
  return fetch("http://localhost:8088/jokes").then((res) => res.json());
};

export const toggleJokeTold = async (joke) => {
  await fetch(`http://localhost:8088/jokes/${joke.id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      told: true,
    }),
  }).then(function (response) {
    return response.json();
  });
};

export const toggleJokeUntold = async (joke) => {
  await fetch(`http://localhost:8088/jokes/${joke.id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      told: false,
    }),
  }).then(function (response) {
    return response.json();
  });
};

export const deleteJoke = async (joke) => {
  await fetch(`http://localhost:8088/jokes/${joke.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
