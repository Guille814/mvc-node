const taskModel = require('../models/task');

exports.getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.render('tasks', { tasks });
};

exports.addTask = (req, res) => {
    const task = req.body.task;
    if (task) {
        taskModel.addTask(task);
    }
    res.redirect('/tasks');
};

exports.deleteTask = (req, res) => {
    const index = req.params.index;
    taskModel.deleteTask(index);
    res.redirect('/tasks');
};
