const db = require ('../data/db-config');

module.exports ={
    getResources,
    addResources
}

// GET
function getResources() {
    return db.select('*').from('resources')
};

// POST
function addResources(resource) {
    return db('resources').insert(resource)
};

function ab (a,b){
    return a+b
};
ab(3,4);