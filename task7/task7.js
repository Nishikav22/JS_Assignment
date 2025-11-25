const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const nextJokeBtn = document.getElementById("nextJokeBtn");

function fetchJoke() {
  nextJokeBtn.disabled = true;
  nextJokeBtn.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      setup.textContent = data.setup;
      punchline.textContent = data.punchline;

      nextJokeBtn.disabled = false;
      nextJokeBtn.textContent = "Next Joke";
    })
    .catch(error => {
      setup.textContent = "Failed to load joke 😢";
      punchline.textContent = "";

      nextJokeBtn.disabled = false;
      nextJokeBtn.textContent = "Try Again";

      console.error("Error fetching joke:", error);
    });
}

nextJokeBtn.addEventListener("click", fetchJoke);
