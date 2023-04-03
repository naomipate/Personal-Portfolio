const randomCocktailName = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
const randomDrink = document.querySelector("#randomizer")

randomDrink.addEventListener("click", (event) => {

    fetch(randomCocktailName)
    .then((response) => response.json())
    .then(transitionToSelected)
    .catch(displayError);

});


function transitionToSelected (results) {
// search drink name
    window.location.href = `selected.html?id=${results.drinks[0].idDrink}`;
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