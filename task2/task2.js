const textBox = document.getElementById("textBox");
const count = document.getElementById("count");

const LIMIT = 100;

textBox.addEventListener("input", () => {
  let remaining = LIMIT - textBox.value.length;

  count.textContent = `Characters left: ${remaining}`;

  // Color change logic
  if (remaining > 60) {
    count.style.color = "green";
  } else if (remaining > 20) {
    count.style.color = "orange";
  } else {
    count.style.color = "red";
  }
});
