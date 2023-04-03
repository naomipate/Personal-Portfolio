const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
const indexpage = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=frozen%20mint%20daiquiri";

fetch(indexpage)
    .then((response) => response.json())
    .then(displayHomepage)
    .catch(displayError);

function displayHomepage (results) {

    const drinkName = document.querySelector("h2");
    drinkName.innerHTML = `<a href="selected.html?id=${results.drinks[0].idDrink}">${results.drinks[0].strDrink}</a>`;

    const homepageDrink = document.querySelector("#homepageDrink");
    homepageDrink.setAttribute("src", results.drinks[0].strDrinkThumb);

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
