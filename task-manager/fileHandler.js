// Create the fileHandler.js Module: 
// ○ Use the fs (File System) built-in module to define and export the 
// following functions: 
// 1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON 
// format. 
// 2. loadTasks(filePath): Reads and parses the tasks from the file. 
// If the file doesn’t exist, return an empty array. 

 const fs = require('fs');

 function saveTasks(filePath, tasks) {
        const json = JSON.stringify(tasks, null, 2); 
        fs.writeFileSync(filePath, json, 'utf-8');
 }

function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.trim()) return [];
    return JSON.parse(content);
}

module.exports = {saveTasks,loadTasks};