
exports.up = function(knex) {
  
    return knex.schema.createTable('tasks', tbl =>{
        // Primrary Key
        tbl.increments();
        
        //Project ID foreign key
        tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')

        // Task Description
        tbl.string('task_description')
        .notNullable();

        // Notes
        tbl.string('notes');

        // Completed?
        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks');
  
};
