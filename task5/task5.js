const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Book: JavaScript Basics", category: "books" },
    { name: "Book: Think & Grow Rich", category: "books" },
    { name: "Sneakers", category: "clothing" },
    { name: "Smartwatch", category: "electronics" }
];

const productList = document.getElementById("productList");
const buttons = document.querySelectorAll(".btn");
const search = document.getElementById("search");

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        productList.appendChild(li);
    });
}

// Default display
displayProducts(products);

// Category Filtering
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;

        if (category === "all") {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
        }

        search.value = ""; // reset search on category change
    });
});

// Search Filtering
search.addEventListener("keyup", () => {
    const keyword = search.value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    displayProducts(filtered);
});
