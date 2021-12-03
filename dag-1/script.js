//Console metoder...
/*
console.log('Här kommer något');
console.warn('Här är en varning');
console.error('Här gick det fel!');
console.log({make: "Volvo", model:"V40"});
console.table({make: "Volvo", model:"V40"});
*/

//Deklarera en variabel firstName och ge den ett värde...
/*
    Flera rader av kommenterar eller dokumention
*/

/*
var firstName;
firstName = 'Michael';

console.log(typeof firstName);

var mileage;
mileage = '12000';
console.log(typeof mileage, mileage);

mileage = 25000;
console.log(typeof mileage, mileage);

var modelYear = 2018
console.log(typeof modelYear, modelYear);

console.log(mileage + modelYear);
*/

/*
var isActive;
console.log(typeof isActive);

isActive = true;
console.log(typeof isActive);
console.log(typeof false);

var make = null;
console.log(typeof make);
*/

// Vi har 3 olika sätt att deklarera variable på i JavaScript
/*
    var = deklarerar en variabel och placerar variabeln i det globala namnytrymme.
    Från och med ES6 har vi fått block variabler, let och const.
    let = deklarerar en variabel i ett block scope (mutable)
    const = deklarerar en variabel i ett block scope (immutable)
*/

// UNDVIK ATT ANVÄNDA var I MODERN JAVASCRIPT 

// let:

/*
let age = 30;
console.log(age);

age = 35;
console.log(age);

// const:
// const mileage = 10000;
console.log(mileage);

//mileage = 20000;
console.log(mileage);
*/

// Enkel regel är att alltid börja med const. Behövs det att ändra på
// ett värde, gör om till let.

/* JavaScript operatorer... */
// grundläggande matematiska operatorer

/*
 const currentYear = 2021;
 console.log(typeof currentYear);

 const ageMalin = currentYear - 1990;
 console.log(ageMalin);

 // Slå samman strängar...
 const make = 'Volvo';
 const model = 'V60';
 const car = make + ' ' + model;
 console.log(car);

 console.log(car.length);

 // Tilldelnings operatorn
 let x = 2 * 5 / 2;

 console.log(x);

 x += 5;

 console.log(x);

 x -= 2;
 console.log(x);
 
 x /= 4;
 console.log(x);

 x *= 5;
 console.log(x);

 x++;
 console.log(x);
 
 x--;

 console.log(x);
*/

// Jämförelser...
/*const currentYear = 2021;
const ageMalin = currentYear - 1990;
const ageEmma = currentYear - 1992;

console.log(ageMalin > ageEmma);
console.log(ageMalin < ageEmma);

// == != > < >= <= ...

let x, y;

x = y = 30 - 10 -5;
console.log(x, y);
*/

// Strängar och literals
const firstName = 'Michael';
const occupation = 'Developer';
const startTeachingYear = 1990;
const currentYear = 2021;

const badWay = "I'm " + firstName + ', and I am a ' 
    + occupation + ' and I have been teaching for ' 
    + (currentYear - startTeachingYear) + ' years';

console.log(badWay);

// String interpolation...
const rightWay = `I'm ${firstName} and I am a ${occupation} and have been teaching web technologies for ${(currentYear - startTeachingYear)} years`; 
console.log(rightWay);

const html = `<div class="demo">Test html</div>
    <p>Lite extra text</p>
    <input type="submit" value="klicka här!">`

console.log(html);