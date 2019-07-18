
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Yam'},
        {name: 'Cassava'},
        {name: 'Plantain'},
        {name: 'Oil'},
        {name: 'Onions'},
        {name: 'Rice'},
        {name: 'Beans'},
        {name: 'Water'},
        {name: 'Tomatoes'},
        {name: 'Pepper'},
        {name: 'Salt'},
        {name: 'Meat'},
        {name: 'Dried fish'},
        {name: 'Koobi'},
      ]);
    });
};
