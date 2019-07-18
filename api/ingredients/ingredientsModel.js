const db = require('../../data/dbConfig');

function getRecipes() {
  return db('ingredients');
}

function getRecipesWithSingleIngredient(recipe_id) {
  return db('recipes')
    .select(
      'recipes.name'
    )
    .count('ingredients.name as ingredients')
    .leftJoin('recipe_requirements', 'recipes.id', 'recipe_requirements.recipe_id')
    .leftJoin('ingredients', 'ingredients.id', 'recipe_requirements.ingredient_id')
    .where({ recipe_id })
    .groupBy('recipe_requirements.ingredient_id')
}

module.exports = {
  getRecipes,
  getRecipesWithSingleIngredient
}
