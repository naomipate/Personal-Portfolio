const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
let userSearchTerm = document.querySelector("#searchbox");
const indexpage = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17206";
const form = document.querySelector("form");

fetch(indexpage)
    .then((response) => response.json())
    .then(displaySearchBar)
    .catch(displayError);

function displaySearchBar ({ results }) {
// search drink name
    const list = document.querySelector("ul");
    
    if (userSearchTerm.value !== "") {
        for (let i = 0; i < results.length; i++) {
            if (userSearchTerm.value === results.drinks[i].strDrink) {
                const drink = document.createElement("li");
                drink.textContent = `${results.drinks[i].strDrink}, ${results.drinks[i].strAlcoholic}, ${results.drinks[i].strGlass}`;
                list.append(drink);
            } else {
                const invalidSearch = document.createElement("p");
                invalidSearch.textContent = "Please type in a valid drink name";
            }
        }
    }
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
