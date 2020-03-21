const db = require ('../data/db-config');

module.exports ={
    getProjects,
    addProjects
}

// GET
function getProjects() {
    return db.select('*').from('projects')
};

// POST
function addProjects(project) {
    return db('projects').insert(project)
};