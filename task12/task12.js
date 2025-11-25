const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// fetch 6 random images from Unsplash
async function fetchImages() {
  const images = [];

  for (let i = 0; i < 6; i++) {
    const url = `https://source.unsplash.com/random/300x300?sig=${Math.random()}`;
    images.push(url);
  }

  return images;
}

// display images in the gallery
function displayImages(imageUrls) {
  imageUrls.forEach(url => {
    const div = document.createElement("div");
    div.classList.add("image-item");

    const img = document.createElement("img");
    img.src = url;

    div.appendChild(img);
    gallery.appendChild(div);
  });
}

// main function to load images
async function loadImages() {
  loadMoreBtn.disabled = true;
  loadMoreBtn.textContent = "Loading...";

  const images = await fetchImages();

  displayImages(images);

  loadMoreBtn.disabled = false;
  loadMoreBtn.textContent = "Load More";
}

loadMoreBtn.addEventListener("click", loadImages);

// load initial images
loadImages();
