// Function simulating delayed post loading
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30% chance to fail (for testing retry)
      if (Math.random() < 0.3) {
        reject("Failed to load posts. Try again.");
      }

      resolve([
        "Understanding JavaScript Promises",
        "Async/Await Made Simple",
        "Frontend Tips for Beginners",
        "How to Build Responsive UI",
        "Mastering DOM Manipulation"
      ]);
    }, 2000);
  });
}

document.getElementById("loadBtn").addEventListener("click", fetchPosts);
document.getElementById("retryBtn").addEventListener("click", fetchPosts);

async function fetchPosts() {
  const message = document.getElementById("message");
  const postList = document.getElementById("postList");
  const retryBtn = document.getElementById("retryBtn");

  message.textContent = "Loading posts…";
  postList.innerHTML = "";
  retryBtn.style.display = "none";

  try {
    const posts = await loadPosts();

    message.textContent = "Posts Loaded Successfully!";
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post;
      postList.appendChild(li);
    });

  } catch (error) {
    message.textContent = error;
    retryBtn.style.display = "inline-block";
  }
}
