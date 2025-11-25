const tableBody = document.querySelector("#userTable tbody");
const refreshBtn = document.getElementById("refreshBtn");
const loader = document.getElementById("loader");

// Fetch users
async function fetchUsers() {
  loader.classList.remove("hidden"); // show spinner
  tableBody.innerHTML = ""; // clear table

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      `;
      tableBody.appendChild(row);
    });

  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="3" style="color:red;">Failed to fetch data ❌</td></tr>`;
  }

  loader.classList.add("hidden"); // hide spinner
}

// Refresh button click
refreshBtn.addEventListener("click", fetchUsers);

// Load data on page start
fetchUsers();
