// Importo la prima funzione
const firstFunction = require('./names');
console.log(firstFunction);

// Importo la seconda funzione 
const secondFunction = require('./hobbies');
const Identificativo = require('./names');
console.log(secondFunction);

// Creo la nuova funzione 
function thirdFunction () {
    return {
        fullName: firstFunction.firstName + firstFunction.lastName,
        hobbies: secondFunction.hobbyOne + secondFunction.hobbyTwo + secondFunction.hobbyThree
    }
}
const risultato = thirdFunction(fullName, hobbies);
console.log(risultato);

