const db = require ('../data/db-config');

module.exports ={
    getTasks,
    addTasks
}

// GET
function getTasks() {
    return db.select('*').from('tasks')
};

// POST
function addTasks(task) {
    return db('tasks').insert(task)
};