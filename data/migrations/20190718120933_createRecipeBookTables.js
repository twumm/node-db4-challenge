
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments();
      table.text('name')
        .notNullable();
    })
    .createTable('ingredients', table => {
      table.increments();
      table.text('name')
    })
    .createTable('instructions', table => {
      table.increments();
      table.integer('instruction_number')
        .unsigned()
        .notNullable();
      table.text('instructions')
        .notNullable();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('recipe_requirements', table => {
      table.increments();
      table.float('quantity')
        .notNullable();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  
};
