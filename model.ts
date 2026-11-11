
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

let nextId = 1;

// Add a new task
export function addTask(
    tasks: Task[],
    title: string
): Task[] {

    const newTask: Task = {
        id: nextId++,
        title: title,
        status: "todo"
    };

    return [...tasks, newTask];
}

// Advance task status
export function advanceTask(
    tasks: Task[],
    id: number
): Task[] {

    return tasks.map((task) => {

        if (task.id === id) {

            let newStatus: TaskStatus;

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
export function filterByStatus(
    tasks: Task[],
    status: TaskStatus
): Task[] {

    return tasks.filter((task) => task.status === status);
}
