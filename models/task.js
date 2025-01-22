let tasks = [];

function getAllTasks() {
    return tasks;
}

function addTask(task) {
    tasks.push(task);
}

function deleteTask(index) {
    tasks.splice(index, 1);
}

module.exports = {
    getAllTasks,
    addTask,
    deleteTask
};
