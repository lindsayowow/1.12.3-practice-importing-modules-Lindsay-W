// Create the taskManager.js Module: 
// ○ Define and export the following functions: 
// 1. addTask(tasks, task): Adds a new task to the task list. 
// 2. listTasks(tasks): Logs all tasks to the console. 

const taskList = [];

function addTask(tasks,task) {
    tasks.push(task);
    return task;
}

addTask(taskList, {name: "taskD", description: "description 4"});

 function listTasks(tasks) {
     return console.log(tasks);
 }

module.exports = {listTasks,addTask};

