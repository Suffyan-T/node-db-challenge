
exports.up = function(knex) {
  
    return knex.schema.createTable('resources', tbl =>{
        // Primrary Key
        tbl.increments();
        
        //Resources Name 
        tbl.string('resource_name')
        .notNullable()
        .unique();

        // Resources Discription
        tbl.string('resource_description')
    })
};

exports.down = function(knex) {

    return knex.schema
    .dropTableIfExists('resources')
  
};
