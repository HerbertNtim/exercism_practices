/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
 export function cookingStatus(timer) {
   if (timer === 0){
     return 'Lasagna is done.'
   }

   return !timer ? 'You forgot to set the timer.' : 'Not done, please wait.'
 }

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(ingredients) {
  let sauceCount = 0;
  let noodlesCount = 0;

  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] === 'sauce') {
      sauceCount += 0.2
    }

    if (ingredients[i] === 'noodles'){
      noodlesCount += 50
    }
  }

  return { noodles: noodlesCount, sauce: sauceCount }
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1]; 
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portion) {
  const scaledRecipe = {}
  const factor = portion / 2

  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return scaledRecipe
}