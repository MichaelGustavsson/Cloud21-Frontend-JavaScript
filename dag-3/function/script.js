'use strict';

/* FUNKTIONER */
// Funktioner är ett sätt att gruppera kod/logik som kan återanvändas...

// Funktioner som inte returnerar något och inte tar parametrar, sk. void funktioner...
function log() {
  //function body
  console.log('Detta är ett svar ifrån log funktionen');
}

// Anropa funktionen
log();
log();
log();
log();

// Funktioner som inte returnerar något men tar parametrar..
function writeToLog(message) {
  console.log(
    `Detta är ett meddelande ifrån min writeToLog funktion ${message}`
  );
}

// Anropa funktionen
writeToLog(true);
writeToLog('Meddelande 2');
writeToLog('Meddelande 3');
writeToLog(455);

// Funktion som tar emot en parameter/argument och returnerar data...
function findVehicle(registrationNumber) {
  console.log(registrationNumber);
  // Normalt så anropas ett REST API för att hämta fordons information...
  const vehicle = `Bil med registreringsnummer ${registrationNumber} hittades`;
  // Returnerar data...
  return vehicle;
}

// Anropa funktionen
const car1 = findVehicle('RNZ44Y');
console.log(car1);

/* Vi har tre olika sätt att skapa/deklarera funktioner i JavaScript */
/* FUNCTION DECLARATIONS VS. FUNCTION EXPRESSIONS */
const currentYear = new Date().getFullYear();

/* START FUNCTION DECLARATION... */
// Anropa funktionen BÖR INTE ANVÄNDAS, UTIFRÅN ETT LÄSBARHETSPERSPEKTIVE!!!
// Detta fungerar tack vare 'Hoisting' i JavaScript...
// const vehicleAge1 = calculateVehicleAge(2015);
// console.log(vehicleAge1);

// Function declaration...
// Namngiven funktion
function calculateVehicleAge(modelYear) {
  const age = currentYear - modelYear;
  console.log(age);
  return age;
}

// Anropa funktionen
const vehicleAge1 = calculateVehicleAge(2015);
console.log(vehicleAge1);

/* END FUNCTION DECLARATION... */

/* START FUNCTION EXPRESSIONS */

//Detta går inte!!!
//console.log(fnCalculateVehicleAge(2018));

// Funktioner utan namn(anonyma funktioner)
const fnCalculateVehicleAge = function (modelYear) {
  return currentYear - modelYear;
};

console.log(fnCalculateVehicleAge(2018));
/* END FUNCTION EXPRESSIONS */

/* START ARROW FUNCTION */
// Introducerades i version E6 av JavaScript...
// Function Expression men enklare...
// Version 1.
const calculateVehicleAgeArrow = (modelYear) => {
  return currentYear - modelYear;
};

// Version 2. One-Liner
/*
  1. Parenteser behövs inte om endast en parameter skickas med
  2. Parenteser måste användas om ingen parameter eller fler än 1 används.
*/
const calculateVehicleAgeArrowOneLiner = (modelYear) => currentYear - modelYear;

const x = (year1, year2) => year1 - year2;

const y = () => console.log('Här är en Arrow function utan argument');

console.log(calculateVehicleAgeArrow);
console.log(calculateVehicleAgeArrow(2014));

const age = calculateVehicleAgeArrow(2013);
console.log(age);

console.log(x(currentYear, 2012));
y();

/* END ARROW FUNCTION */
