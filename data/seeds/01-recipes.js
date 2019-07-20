
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Fufu and Goat Light Soup'},
        {name: 'Yam with Abom'},
        {name: 'Braised Rice'},
        {name: 'Jollof Rice'},
        {name: 'Waakye'},
      ]);
    });
};
