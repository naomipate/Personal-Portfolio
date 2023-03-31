const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
let userSearchTerm = document.querySelector("#searchbox");
const searchCocktailNameAZ = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const searchCocktailName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearchTerm.value}`;
const searchCocktailIngredientName = "www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";
const cocktailDetailsByID = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
const generateRandomCocktail = "www.thecocktaildb.com/api/json/v1/1/random.php";
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

fetch(searchCocktailNameAZ)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then(displayNavLinks)
    .then(displaySearchBar)
    .catch(displayError);
});

function displayNavLinks (results) {
 // logo
 const logo = document.querySelector("#logo");
 logo.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(searchCocktailNameAZ).then((response) => response.json().then(json => {
        console.log(json);
    }));
 });

 //drinks
 const drinks = document.querySelector("#drinks");
 drinks.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(searchCocktailName)
 });

 //ingredients

 //randomizer

}

function displaySearchBar (results) {
// search drink name

//search ingredient name

//search by drink id

//search by ingredient id
}
