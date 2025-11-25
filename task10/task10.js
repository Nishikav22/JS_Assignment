let products = []; // store fetched products

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Fetch products from API
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  products = await res.json();
  displayProducts(products);
}

// Display product cards in grid
function displayProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.title.slice(0, 22)}...</h3>
      <p>₹ ${product.price}</p>
    `;

    grid.appendChild(card);
  });
}

// Filter based on search
function searchProducts() {
  const value = document.getElementById("searchBox").value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}

// Debounced search
const debouncedSearch = debounce(searchProducts, 300);

// Event listener
document.getElementById("searchBox").addEventListener("keyup", debouncedSearch);

// Call fetch on page load
fetchProducts();
