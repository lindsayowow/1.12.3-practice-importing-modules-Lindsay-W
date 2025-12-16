// 3. Use the Modules in app.js: 
// ○ Import the custom modules (taskManager.js and fileHandler.js) 
// and the path built-in module. 
// 1 
// ○ Implement the following functionality: 
// 1. Load existing tasks from a file named tasks.json. 
// 2. Add new tasks to the list. 
// 3. List all tasks. 
// 4. Save the updated task list back to the file. 
// Requirements 
// ● Use require to import all modules. 
// ● Test the program by adding, listing, and saving tasks. 

const taskManager = require('./taskManager.js');
const fileHandler = require('./fileHandler.js');
const path = require('path');
const input = require('readline-sync');

const filePath = path.join(__dirname, 'tasks.json');// Build the full path to tasks.json

let tasks = fileHandler.loadTasks(filePath);

console.log("These are the current tasks on the list:  ");
taskManager.listTasks(tasks); // shows current list

function runApp() {
    let keepGoing = true;
    do {
      const choice = input.question("Do you want to add a task?  ");
        if (choice.toUpperCase() === "Y" || choice.toUpperCase() === "YES") {
            let taskA = input.question(`What task would you like to add to the list?  `);
            taskManager.addTask(tasks, { taskName: taskA }); 
        } else {
            keepGoing = false;
        }
    } while (keepGoing);
  }

runApp();

console.log("These are the updated tasks on the list:");

taskManager.listTasks(tasks); // shows updated list.

fileHandler.saveTasks(filePath, tasks); // saves tasks back to file. 


