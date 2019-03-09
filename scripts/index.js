const gotNames = document.querySelector("[data-gotNames");
const gotStats = document.querySelector("[data-gotStats");

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
    console.log(personName);
    characters.forEach(function(person){
        if (person.name == personName) {
            gotStats.textContent = 'LOREM IPSUM';
        }
    });
}
function addClickEvent(person) {
    person.addEventListener('click', respondToClick);
}

const characterButtons = document.querySelectorAll('[data-target]');
characterButtons.forEach(addClickEvent);



