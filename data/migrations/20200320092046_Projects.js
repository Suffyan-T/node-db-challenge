
exports.up = function(knex) {
    return knex.schema.createTable('projects',tbl=>{
        
        // Primrary key
        tbl.increments()
        
        // Project Name
        tbl.string('project_name')
        .notNullable()
        
        // Project Description
        tbl.string('project_description')
        
        // completed
        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)
    })
  
};

exports.down = function(knex) {
    return knex.schema
    
    // drop Projects
    .dropTableIfExists('projects')
  
};
