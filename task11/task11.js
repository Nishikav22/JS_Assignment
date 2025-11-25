// Create Promises
function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}

// Display step in DOM
function highlightStep(message) {
  const list = document.getElementById("stepList");
  
  // Remove bold from previous items
  const items = document.querySelectorAll(".step-item");
  items.forEach(item => item.classList.remove("bold"));

  // Add new step
  const li = document.createElement("li");
  li.className = "step-item bold"; // bold for current step
  li.textContent = message;
  list.appendChild(li);
}

document.getElementById("startBtn").addEventListener("click", async () => {
  const list = document.getElementById("stepList");
  list.innerHTML = ""; // reset

  let s1 = await step1();
  highlightStep(s1);

  let s2 = await step2();
  highlightStep(s2);

  let s3 = await step3();
  highlightStep(s3);
});
