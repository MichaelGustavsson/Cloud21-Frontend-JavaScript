'use strict';

/* START ARBETA MED LISTOR(ARRAYS) */
// Skapa en lista med hjälp av literal syntax...
const vehicleManufacturor = ['Volvo', 'Kia', 'Ford'];

console.log(vehicleManufacturor);

// Skapa en lista genom att skapa ett objekt av Array klassen...
// Denna är inte lika vanlig, används väldigt sällan!
const models = new Array('V40', 'V60', 'Ceed', 'Mustang', 'Escort');
console.log(models);

// Plocka element/objekt ur en array...
const Volvo = vehicleManufacturor[0];
console.log(Volvo);
//Går vi utanför listans/array gränser få får vi undefined...
console.log(vehicleManufacturor[3]);

// Ta reda på hur många element som det finns i listan...
console.log(models.length);
console.log(vehicleManufacturor.length);

// Plocka ut sista elementet...
console.log(vehicleManufacturor[vehicleManufacturor.length - 1]);

// LÄGGA TILL NYA ELEMENT!
// Lägga till sist i listan...
vehicleManufacturor.push('Renault');
console.log(vehicleManufacturor);

// Lägga till ett element först i listan...
vehicleManufacturor.unshift('Volkswagen');
console.log(vehicleManufacturor);

// TA BORT ELEMENT UR LISTAN!
// Ta bort sista elementet.
const removed = vehicleManufacturor.pop();
console.log(vehicleManufacturor, removed);

// Ta bort första elementet...
vehicleManufacturor.shift();
console.log(vehicleManufacturor);

// Ta reda på positionen(index) av ett element i listan
const index = models.indexOf('Ceed');
console.log(`Modellen Ceed har index ${index}`);
const kiaModel = models[index];
console.log(`Här är information om modellen Ceed / ${kiaModel}`);

// E6!!!
console.log(vehicleManufacturor.includes('Ford'));
console.log(vehicleManufacturor.includes('Mercedes'));

/* ITERERA GENOM LISTOR (LOOP THROUGH ARRAYS) */

// for - loop traditionella loopen som funnits i all tider...
for (let i = 0; i < vehicleManufacturor.length; i++) {
  console.log(`Värde på for loop räknare är just nu ${i}`);
  console.log(`Tillverkare ${vehicleManufacturor[i]}`);
}

// for - let - of...
for (let make of vehicleManufacturor) {
  console.log(`for-let-of ${make}`);
}

// forEach loopen...
// forEach loopen behöver en CallBack funktion för att bearbeta listan.
// 1. Använd en anonym funktion
models.forEach(function (model) {
  console.log(`forEach - ${model}`);
});
// 2. Använd en pil funktion(Arrow function)
models.forEach((model) => {
  console.log(`forEach - ${model}`);
});

// 3. Använd en anonym funktion ta in alla parametrar
models.forEach(function (element, pos, list) {
  console.log(element, pos, list);
});

// 4. Använd en pil funktion(Arrow function) och ta in alla parametrar.
models.forEach((element, pos, list) => {
  console.log(element, pos, list);
});

// while loop, används väldigt sällan...
let i = 0;
while (i < vehicleManufacturor.length) {
  console.log(vehicleManufacturor[i]);
  i++;
}

/* END ARBETA MED LISTOR(ARRAYS) */

console.log(
  '-----------------------ARRAY METODER-----------------------------------------'
);
/* START GRUNDLÄGGANDE METODER FÖR ATT MANIPULERA LISTOR(ARRAYS) */
const arr = [1, 2, 3, 4, 9, 6, 7, 8, 5];
console.log(arr);

// SLICE det är en metod som tar inga, 1 eller 2 argument...
// Skapar en kopia som den returnerar
//Immutable!!!
// Plocka ut element/objekt ifrån en lista och skapa en ny lista av resultatet.

// Inga argument...
// Skapat en exakt kopia av listan...
const arr1 = arr.slice();
console.log(arr, arr1);

// Ett argument...
// Starta från 3:e positionen och ta allt därefter...
const arr2 = arr.slice(3);
console.log(arr, arr2);

// Två argument...
// Plocka ett intervall av värden...
const arr3 = arr.slice(3, 8);
console.log(arr, arr3);

// Plocka ifrån slutet av listan...
const arr4 = arr.slice(-4);
console.log(arr, arr4);

console.log('------------ SPLICE() ------------------');
/* SPLICE() den förändrar original listan */
//Mutable!!
// console.log(`Original ${arr}`);
// const arr5 = arr.splice(4);
// console.log(`Original ${arr}`);
// console.log(`Bortplockade ${arr5}`);

//Oftast används splice() till att ta bort ett eller flera element ur en lista.
// const arr6 = arr.splice(3, 1);
// console.log(`Original ${arr}`);
// console.log(`Bortplockade ${arr6}`);

/* REVERSE() */
// Mutable!
console.log('------------ REVERSE ------------------');

console.log(arr);
// const arr7 = arr.reverse();
// console.log(`Original ${arr}`);
// console.log(`Reversed ${arr7}`);
arr.reverse();
console.log(`Original ${arr}`);

/* SORT() */
// Mutable!
console.log('------------ SORT ------------------');

arr.sort();
console.log(arr);

/* CONCAT() */
// Immutable!
console.log('------------ CONCAT ------------------');
const arr8 = ['a', 'b', 'c', 'd'];
console.log(arr8);

const arr9 = arr.concat(arr8);
console.log(`Original ${arr}`);
console.log(`Arr9 ${arr9}`);

/* JOIN() */
// Immutable!
console.log('------------ JOIN ------------------');

const arr10 = arr.join(' ');
console.log(`Original ${arr}`);
console.log(`Arr10 ${arr10}`);

/* END GRUNDLÄGGANDE METODER FÖR ATT MANIPULERA LISTOR(ARRAYS) */
