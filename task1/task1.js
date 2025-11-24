const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
tasks.forEach(task => renderTask(task));

addBtn.addEventListener("click", addTask);

function addTask() {
    let text = input.value.trim();
    if (text === "") {
        alert("Please enter a task");
        return;
    }

    let newTask = {
        id: Date.now(),
        text: text
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);

    input.value = "";
}

function renderTask(task) {
    let li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-id", task.id);

    li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <div class="btn-group">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        li.remove();
    });

    // Edit task
    li.querySelector(".edit-btn").addEventListener("click", () => {
        let newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
            task.text = newText;
            li.querySelector(".task-text").textContent = newText;
            saveTasks();
        }
    });

    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
