let nextId = 1;
// Add a new task
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
// Advance task status
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id === id) {
            let newStatus;
            if (task.status === "todo") {
                newStatus = "in-progress";
            }
            else if (task.status === "in-progress") {
                newStatus = "done";
            }
            else {
                newStatus = "done";
            }
            return { ...task, status: newStatus };
        }
        return task;
    });
}
// Filter tasks
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
