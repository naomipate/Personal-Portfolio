const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
const urlParams = new URLSearchParams(location.search);
const searchCocktailIngredientName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";
const cocktailDetailsByID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${urlParams.get("id")}`;

fetch(cocktailDetailsByID)
    .then((response) => response.json())
    .then(displayInstructions)
    .catch(displayError);

function displayInstructions (results) {
// ingredients and measurements
    const drinkTitle = document.querySelector("h2");
    drinkTitle.textContent = `${results.drinks[0].strDrink}`;
    const img = document.querySelector("#drinkPic");
    img.setAttribute("src", results.drinks[0].strDrinkThumb);

    const drinkIngredientList = document.querySelector("#ingredientList");

    const drinkIngredientListTotal = 15; // noticed the API only goes up to 15.

    for (let i = 1; i <= drinkIngredientListTotal; i++) {
        const drinkIngredientListItem = document.createElement("li");

        const drinkIngredient = results.drinks[0][`strIngredient${i}`];
        if (drinkIngredient === null) {
            break;
        }
        
        const drinkIngredientMeasurement = results.drinks[0][`strMeasure${i}`];

        drinkIngredientListItem.textContent = `${drinkIngredient}, ${drinkIngredientMeasurement}`;
        drinkIngredientList.append(drinkIngredientListItem);

    }

    // instructions

    const drinkInstructions = document.querySelector("#drinkInstructions");
    drinkInstructions.textContent = results.drinks[0].strInstructions;

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