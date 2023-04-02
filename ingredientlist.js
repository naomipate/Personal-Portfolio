const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
let userSearchTerm = document.querySelector("#searchbox");
const indexpage = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mint`
const searchCocktailName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const searchCocktailIngredientName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${userSearchTerm.value}`;
const cocktailDetailsByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
const generateRandomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

fetch(searchCocktailIngredientName + userSearchTerm.value)
    .then((response) => response.json())
    .then(displaySearchBar)
    .catch(displayError);
});

function displaySearchBar (results) {
// search drink name
    const list = document.querySelector("ul");

    list.innerHTML = "";
    
    if (userSearchTerm.value !== "") {
        for (let i = 0; i < results.ingredients.length; i++) {
            if (results.ingredients[i].strIngredient.toLowerCase().includes(userSearchTerm.value.toLowerCase())) {
                const drink = document.createElement("li");
                let text = results.ingredients[i].strIngredient;
                if (results.ingredients[i].strType) {
                    text += ` (${results.ingredients[i].strType})`;
                }
                drink.innerHTML = `<a href="selectedIngredient.html?id=${results.ingredients[i].idIngredient}">${text}</a>`;
                list.append(drink);
            }
        }
    }
    userSearchTerm.value = "";
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