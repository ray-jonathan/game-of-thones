console.log(`There are ${characters.length} characters in the array.`);
/*
// How many characters names start with "A"?

function charactersNamesWithA(charactersArray){
    const aNameArray = charactersArray.filter(function (person){
        return (person.name[0]) == "A";
    });
    const aNameOnlyArray = aNameArray.map(function (person){
        return person.name;
    });
    return aNameOnlyArray.length;
}
// How many characters names start with "Z"?
function charactersNamesWithZ(charactersArray){
    const zNameArray = charactersArray.filter(function (person){
        return (person.name[0]) == "Z";
    });
    const zNameOnlyArray = zNameArray.map(function (person){
        return person.name;
    });
    return zNameOnlyArray.length;
}
// How many characters are dead?
function charactersDead(charactersArray){
    const deadNameArray = charactersArray.filter(function (person){
        return (person.died) !== "";
    });
    const deadNameOnlyArray = deadNameArray.map(function (person){
        return person.name;
    });
    return deadNameOnlyArray.length;
}
// Who has the most titles?
function charactersMostTitles(charactersArray){
    charactersArray.sort(function (a, b){
        return (b.titles.length - a.titles.length);
    });
    return charactersArray[0].name[0];
}
// How many are Valyrian?
function charactersValyrian(charactersArray){
    const valyrianNameArray = charactersArray.filter(function (person){
        return (person.culture) == "Valyrian";
    });
    const valyrianNameOnlyArray = valyrianNameArray.map(function (person){
        return person.name;
    });
    return valyrianNameOnlyArray.length;
}
// What actor plays "Hot Pie" (and don't use IMDB)?
function charactersHotPie(charactersArray){
    const person = charactersArray.filter(function (guy){
        return guy.name === "Hot Pie";
    });
    return person[0].playedBy[0];
}
// AQUINO'S TANGENT //
function findActorFor(charactersArray, charName){
    const person = charactersArray.filter(function (guy){
        return guy.name === charName;
    });
    return person[0].playedBy[0];
}
// How many characters are *not* in the tv show?
function charactersNotInTV(charactersArray){
    const booksOnlyNameArray = charactersArray.filter(function (person){
        return (person.tvSeries) == "";
    });
    const bookOnlyNameOnlyArray = booksOnlyNameArray.map(function (person){
        return person.name;
    });
    return bookOnlyNameOnlyArray.length;
}
// Produce a list characters with the last name "Targaryen"
function charactersTargaryen(charactersArray){
    const targaryenNamesArray = charactersArray.filter(function (person){
        return (person.name.includes("Targaryen"));
    });
    const namesOnlyTargaryen = targaryenNamesArray.map(function (person){
        return person.name;
    });
    return namesOnlyTargaryen;
}
// Create a histogram of the houses (it's the "allegiances" key)
function charactersAllegiances(charactersArray){
    let aryaObject = {};
    let uniqueHousesArray = [];
    // Create an array of all the allegiances
    const charAllegiancesOnly = charactersArray.map(function (person){
        return person.allegiances;
    });
    // Split multi-allegiance records
    charAllegiancesOnly.forEach(function(record){
        record.forEach(function(house){
            uniqueHousesArray.push(house);
        });
    });

    // Count the allegiances
    uniqueHousesArray.forEach(function(house){
        if (aryaObject.hasOwnProperty(house)){
            aryaObject[house] += 1;
        } else{
            aryaObject[house] = 1;
        }
    });
    
    // Change to pretty names
    let newNames = Object.keys(aryaObject).map((key) => {
        const newKey = houses[key] || key;
        return {[newKey] : aryaObject[key]};
        });
    const prettyNameObject = newNames.reduce((a, b) => Object.assign({}, a, b));

    return prettyNameObject;
}
// AQUINO'S ANSWER //
function createHouseHistogram(charactersArray){
    const histogram = {};
    characters.forEach(function (person){
        person.allegiances.forEach(function (house){
            if (histogram[house]){
                histogram[house] += 1;
            }
            else{
            histogram[house] = 1;
            }
        });
    });
    return histogram;
}
// AQUINO'S ANSWER 2 //
function createHouseHistogram2(charactersArray){
    const histogram = new Map();
    charactersArray.forEach(function (person){
        person.allegiances.forEach(function (house){
            if (histogram.has(house)){
                histogram.set(house, histogram.get(house) + 1);
            }
            else{
                histogram.set(house, 1);
            }
        });
    });
    return histogram;
}
*/

const gotNames = document.querySelector("[data-gotNames");
const gotStats = document.querySelector("[data-gotStats");

function makeNamesButtons(charactersArray){
    const names = charactersArray.map(function (guy){
        return guy.name;
    });
    names.forEach(function (name){
            let button = document.createElement("button");
            button.textContent = name;
            let cleanName = name.replace(/\s+/g, '').replace("'", '').replace(",", '');
            button.setAttribute("ID", cleanName);
            button.addEventListener("click", populatePlayerCard(charactersArray, name));
            gotNames.append(button);
            console.log(name);
        });
}

function populatePlayerCard(charactersArray, dude){
    const person = charactersArray.filter(function (guy){
        return guy.name === dude;
    });
    gotStats.append(person[0].playedBy[0]);
}




// const nameInfo = makeNamesButtons(characters);
makeNamesButtons(characters);
// gotNames.append(nameInfo);