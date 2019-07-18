const express = require('express');

const recipesDb = require('./recipesModel');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const recipes = await recipesDb.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    next(new Error('We are unable to retrieve recipes. Kindly try again.'))
  }
})

module.exports = router;
