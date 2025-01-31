// Importo la prima funzione
const firstFunction = require('./names');
console.log(firstFunction);

// Importo la seconda funzione 
const secondFunction = require('./hobbies');
console.log(secondFunction);

// Creo la nuova funzione 
function thirdFunction () {
    let primaFunzione = firstFunction('Lorenzo','Rampa')
    let secondaFunzione = secondFunction('subacquea', 'calcio', 'nuoto')
    return {
        fullName: primaFunzione.firstName + ' ' + primaFunzione.lastName,
        hobbies: secondaFunzione
    }
}
const risultato = thirdFunction();
console.log(risultato);

