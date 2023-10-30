// These constants hold the important HTML elements for the further modifications...
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", fetchJokes);

fetchJokes();

// This is the fetchJokes function which will dynamically fetch the newest jokes and will display it ...
async function fetchJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// function fetchJokes() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
