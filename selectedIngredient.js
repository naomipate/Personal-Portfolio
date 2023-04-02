const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
const urlParams = new URLSearchParams(location.search);
const searchCocktailIngredientName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";
const cocktailDetailsByID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${urlParams.get("id")}`;

fetch(cocktailDetailsByID)
    .then((response) => response.json())
    .then(displayInstructions)
    .catch(displayError);

function displayInstructions (results) {

    const ingredientName = document.querySelector("h2");
    ingredientName.textContent = results.ingredients[0].strIngredient;

    const ingredientDescription = document.querySelector("#ingredientDescription");
    ingredientDescription.textContent = results.ingredients[0].strDescription;

}

function displayError(error) {
    const mainError = document.querySelector("main");

    const pTag = document.createElement("p");
    pTag.textContent = "Something went wrong!";

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;

    mainError.append(pTag, errorMessage);
}