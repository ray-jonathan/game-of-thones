const gotNames = document.querySelector("[data-gotNames");
const gotStats = document.querySelector("[data-gotStats");
const statName = document.querySelector("[data-statName");
const statGender = document.querySelector("[data-statGender]");
const statCulture = document.querySelector("[data-statCulture]");
const statBorn = document.querySelector("[data-statBorn]");
const statDied = document.querySelector("[data-statDied]");
const statTitles = document.querySelector("[data-statTitles]");
const statAliases = document.querySelector("[data-statAliases]");
const statFather = document.querySelector("[data-statFather]");
const statMother = document.querySelector("[data-statMother]");
const statSpouse = document.querySelector("[data-statSpouse]");
const statAllegiances = document.querySelector("[data-statAllegiances]");
const statBooks = document.querySelector("[data-statBooks]");
const statTvSeries = document.querySelector("[data-statTvSeries]");
const statPlayedBy = document.querySelector("[data-statPlayedBy]");

// Set up the left hand pane
function makeNamesButtons(charactersArray){
    const names = charactersArray.map(function (guy){
        return guy.name;
    });
    names.forEach(function (name){
            let button = document.createElement("button");
            button.textContent = name;
            button.setAttribute("data-target",'');
            gotNames.append(button);
        });
}
makeNamesButtons(characters);

// Fill in the right hand pane
function respondToClick() {
    personName = event.target.textContent;
    console.log(Object.keys(characters[0]));
    characters.forEach(function(person){
        if (person.name == personName) {
            statName.textContent = person.name;
            statGender.textContent = person.gender;
            statCulture.textContent = person.culture;
            statBorn.textContent = person.born;
            statDied.textContent = person.died;
            statTitles.textContent = person.titles;
            statAliases.textContent = person.aliases;
            statFather.textContent = person.father;
            statMother.textContent = person.mother;
            statSpouse.textContent = person.spouse;
            statAllegiances.textContent = person.allegiances;
            statBooks.textContent = person.books;
            statTvSeries.textContent = person.tvSeries;
            statPlayedBy.textContent = person.playedBy;
        }
    });
}
function addClickEvent(person) {
    person.addEventListener('click', respondToClick);
}

const characterButtons = document.querySelectorAll('[data-target]');
characterButtons.forEach(addClickEvent);



