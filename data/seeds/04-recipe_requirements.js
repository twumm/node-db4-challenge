
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_requirements').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_requirements').insert([
        {recipe_id: 1, ingredient_id: 2, quantity: 3},
        {recipe_id: 1, ingredient_id: 3, quantity: 3.5},
        {recipe_id: 1, ingredient_id: 5, quantity: 1},
        {recipe_id: 1, ingredient_id: 8, quantity: 2},
        {recipe_id: 1, ingredient_id: 9, quantity: 2},
        {recipe_id: 1, ingredient_id: 10, quantity: 2},
        {recipe_id: 1, ingredient_id: 11, quantity: 2},
        {recipe_id: 1, ingredient_id: 12, quantity: 1},
        {recipe_id: 1, ingredient_id: 13, quantity: 6},
        {recipe_id: 2, ingredient_id: 1, quantity: 8},
        {recipe_id: 2, ingredient_id: 4, quantity: 4},
        {recipe_id: 2, ingredient_id: 5, quantity: 6.1},
        {recipe_id: 2, ingredient_id: 9, quantity: 4},
        {recipe_id: 2, ingredient_id: 10, quantity: 9.3},
        {recipe_id: 2, ingredient_id: 11, quantity: 2},
        {recipe_id: 2, ingredient_id: 14, quantity: 7.8},
        {recipe_id: 3, ingredient_id: 6, quantity: 2},
        {recipe_id: 3, ingredient_id: 6, quantity: 2},
      ]);
    });
};
