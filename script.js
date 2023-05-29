const API_KEY = 'b469a2403ca04a84acf66e644d51f271';
const ul = document.querySelector('#recipe-list')

const displayRecipes = (recipes) => {
      ul.innerHTML='';
      recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement('li');
        recipeItemEl.classList.add('recipe-item');
        imageEl = document.createElement('img');
        imageEl.src = recipe.image;
        imageEl.alt = 'recipe';
        const title = document.createElement('h2');
        title.innerText = recipe.title;
        ingredientEL = document.createElement('p');
        ingredientEL.innerHTML = `
          <strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(',')}
        `
        linkEl = document.createElement('a');
        linkEl.innerText = 'View Recipe';
        linkEl.href = recipe.sourceUrl;

        recipeItemEl.append(imageEl);
        recipeItemEl.append(title);
        recipeItemEl.append(ingredientEL);
        recipeItemEl.append(linkEl);

        ul.append(recipeItemEl)
      })
}

const getRecipes = async () => {
   const response = (await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`));
   const data = await response.json();
    console.log(data.recipes)
   return data.recipes
}

const init = async () => {
    const recipes = await getRecipes();
    displayRecipes(recipes)
}

init()