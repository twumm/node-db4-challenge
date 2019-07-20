
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, instruction_number: 1, instructions: 'Peel cassava and plantain'},
        {recipe_id: 1, instruction_number: 2, instructions: 'Put on fire and add salt (not required) to taste'},
        {recipe_id: 1, instruction_number: 3, instructions: 'Add your spices and goat meat'},
        {recipe_id: 1, instruction_number: 4, instructions: 'Let the soup boil'},
        {recipe_id: 1, instruction_number: 5, instructions: 'Pound the plantain and cassava with the cassava first with pestle and mortar'},
        {recipe_id: 2, instruction_number: 1, instructions: 'Peel yam and slice to preferred sizes'},
        {recipe_id: 2, instruction_number: 2, instructions: 'Boil yam with salt till it is soft'},
        {recipe_id: 2, instruction_number: 3, instructions: 'Prepare your abom with kontomire'},
        {recipe_id: 3, instruction_number: 1, instructions: 'Fetch cup of rice'},
        {recipe_id: 3, instruction_number: 2, instructions: 'Use 1.5 cup of water and add 2 spoons of oil'},
        {recipe_id: 3, instruction_number: 3, instructions: 'Grind pepper with onion and some salt'},
        {recipe_id: 4, instruction_number: 1, instructions: 'Prepare jollof'},
      ]);
    });
};
