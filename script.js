const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
let userSearchTerm = document.querySelector("#searchbox").value;
const searchCocktailNameAZ = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const searchCocktailName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearchTerm}`;
