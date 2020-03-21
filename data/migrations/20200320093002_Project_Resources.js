
exports.up = function(knex) {
  
    return knex.schema.createTable('project_resources', tbl=>{
        // Project Id
        tbl.integer('project_id')
        .references('id')
        .inTable('projects');

        // Resources Id
        tbl.integer('resources_id')
        .references('id')
        .inTable('resources');
    })
};

exports.down = function(knex) {
  
    return knex.schema
    .dropTableIfExists('projects_resources')
};
