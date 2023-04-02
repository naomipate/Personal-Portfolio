const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
let userSearchTerm = document.querySelector("#searchbox");
const searchCocktailName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

fetch(searchCocktailName + userSearchTerm.value)
    .then((response) => response.json())
    .then(displaySearchBar)
    .catch(displayError);
});

function displaySearchBar (results) {
// search drink name
    const list = document.querySelector("ul");

    list.innerHTML = "";
    
    if (userSearchTerm.value !== "") {
        for (let i = 0; i < results.drinks.length; i++) {
            if (results.drinks[i].strDrink.toLowerCase().includes(userSearchTerm.value.toLowerCase())) {
                const drink = document.createElement("li");
                drink.innerHTML = `<a href="selected.html?id=${results.drinks[i].idDrink}">${results.drinks[i].strDrink}, ${results.drinks[i].strAlcoholic}, ${results.drinks[i].strGlass}</a>`;
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