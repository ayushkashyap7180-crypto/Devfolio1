import { addTask, advanceTask, filterByStatus } from "./model.js";
let tasks = [];
let currentFilter = "all";
const titleInput = document.getElementById("title");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const filterButtons = document.querySelectorAll("[data-filter]");
// Render tasks
function render() {
    list.innerHTML = "";
    const visibleTasks = currentFilter === "all"
        ? tasks
        : filterByStatus(tasks, currentFilter);
    visibleTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";
        const title = document.createElement("span");
        title.textContent = task.title;
        const status = document.createElement("span");
        status.className = "status";
        status.textContent = task.status;
        const advanceButton = document.createElement("button");
        advanceButton.textContent =
            task.status === "done" ? "Completed" : "Advance →";
        advanceButton.disabled = task.status === "done";
        advanceButton.onclick = () => {
            tasks = advanceTask(tasks, task.id);
            render();
        };
        li.append(title, status, advanceButton);
        list.appendChild(li);
    });
}
// Add task
addButton.onclick = () => {
    const title = titleInput.value.trim();
    if (title === "") {
        alert("Enter a task first!");
        return;
    }
    tasks = addTask(tasks, title);
    titleInput.value = "";
    render();
};
// Filter tasks
filterButtons.forEach((button) => {
    button.onclick = () => {
        const selected = button.dataset.filter;
        currentFilter = selected;
        render();
    };
});
render();
