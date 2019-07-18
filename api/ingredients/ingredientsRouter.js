const express = require('express');

const IngredientsDb = require('./ingredientsModel');
const router = express.Router();

router.get('/:id/recipes', async (req, res, next) => {
  const { id } = req.params;
  try {
    const recipesWithSingleIngredient = await IngredientsDb.getRecipesWithSingleIngredient(id);
    res.status(200).json(recipesWithSingleIngredient);
  } catch (error) {
    next(new Error('Something wrong with the singles recipes.'));
  }
})

module.exports = router;