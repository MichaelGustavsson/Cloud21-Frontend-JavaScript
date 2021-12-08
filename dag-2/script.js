/* VILLKORSHANTERING MED IF OCH ELSE */

// const maxCarAge = 5;
// const maxMileage = 100000;
// const modelYear = 2017;
// const mileage = 125000;
// const today = new Date();
// const currentYear = today.getFullYear();

// console.log(currentYear);
// console.log(currentYear - modelYear);
// console.log(currentYear - modelYear < maxCarAge);

// const carAge = currentYear - modelYear;
// console.log(carAge);

// if (carAge < maxCarAge && mileage < maxMileage) {
//   console.log('Bilen är av intresse för oss');
// } else {
//   console.log(
//     'Tyvärr bilen är för gammal för oss eller har gått för många mil'
//   );
// }

/* KONVERTERING AV VÄRDEN I JAVASCRIPT */
/* 
  JavaScript hanterar konverting av datatyper på två sätt
  1. Type Conversion = Manuell omvandling/konvertering ifrån en datatyp till en annan datatyp...
  2. Type Coercion = JavaScript försöker att automatisk omvandla ett värdes datatyp till en annan datatyp.
*/

/* 1. TYPE CONVERSION */
// const mileage = '12500';

// console.log(mileage);
// console.log(typeof mileage, mileage);

// console.log(mileage + 100000);
// console.log(typeof mileage, mileage + 100000);

// console.log(Number(mileage));
// console.log(Number(mileage) + 100000);

// console.log(String(25));

// console.log(Number('Volvo'));
// console.log(typeof NaN);
// console.log(Number('25000'));

/* TYPE COERCION */
// console.log(typeof 2590, 2590);
// console.log('Min bil har gått ' + 2590 + ' mil');
// console.log('Min bil har gått ' + String(2590) + ' mil');

// console.log('20' + '10');
// console.log('20' + '10' - 5);
// console.log(Number('20') + '10' - 5);
// console.log('20' * '2');
// console.log('Volvo' * '2');
// console.log('20' / '2');

// let x = '1' + 1;
// console.log(x);
// x = x - 1;
// console.log(x);

// let y = '10' + '2' + '5';
// console.log(y);
// y = '10' - '2' + '5';
// console.log(y);
// y = '10' - '2' - 3 + '5';
// console.log(y);

// console.log(prompt('Ange ett värde'));
// const v = prompt('Ange ett värde');
// console.log(typeof v, v);
// console.log(v + 2);
// console.log(Number(v) + 2);

/* TRUTHY VALUES */
/*
  Falska värden:
    0,
    '',
    undefined,
    null,
    NaN
*/
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

/*
  Sanna värden
*/
// console.log(Boolean(1));
// console.log(Boolean('Kalle'));
// console.log(Boolean({}));

// const balance = 0;
// if (balance) {
//   console.log('Du har fortfarande pengar att slösa bort');
// } else {
//   console.log('Hoppsan pengar verkar vara slut');
// }

// let mileage;

// console.log(mileage);

// if (mileage) {
//   console.log(`Bilen har gått ${mileage} kilometer`);
// } else {
//   console.log('Hoppsan bilen verkar vara ny');
// }

/* EQUALITY OPERATORS (jämförelse) == VS === */
/*
  == (loose) operator, JavaScript använder sig av Coercion för att jämföra två värden (variabler).

  === (strict) operator, JavaScript använder sig INTE av Coercion för att jämföra.
*/

// const mileage = 89000;

// console.log('89000' == mileage);
// console.log('89000' === mileage);

// if (mileage === '89000') {
//   console.log(`Bilen har gått ${mileage} (strict comparison)`);
// }

// if (mileage == '89000') {
//   console.log(`Bilen har gått ${mileage} (loose comparison)`);
// }

/* OBSERVERA ANVÄND ALLTID STRICT COMPARISON FÖR ATT SLIPPA MÄRKLIGA BUGGAR */

// const number = prompt('Ange ett nummer');
// console.log(number);
// console.log(typeof number, number);

/* loose comparison */
// if (number == 10) {
//   console.log(`Du valde nummer ${number} (loose)`);
// }

/* strict comparison */
// if (number === 10) {
//   console.log(`Du valde nummer ${number} (strict)`);
// }
// if (Number(number) === 10) {
//   console.log(`Du valde nummer ${number} (strict)`);
// }

/* Villkors logik */
// if (Number(number) === 10) {
//   console.log(`Du valde nummer 10`);
// } else if (Number(number) === 20) {
//   console.log(`Du valde nummer 20`);
// } else {
//   console.log('Du valde ett annat nummer');
// }

/* Inte lika med (skilt ifrång) */
// if (Number(number) !== 30) {
//   console.log('Vad är det för fel på nummer 30');
// }

/* LOGISKA OPERATORER */
// const hasCompleteServiceBook = true;
// const hasCompleteTireSets = false;

/* AND kräver att båda uttrycken är sanna för att returnera true */
// console.log(hasCompleteServiceBook && hasCompleteTireSets);

/* OR kräver endast att ett av uttrycken är sant för att returnera true */
// console.log(hasCompleteServiceBook || hasCompleteTireSets);

// console.log(!hasCompleteServiceBook);

// if (hasCompleteServiceBook && hasCompleteTireSets) {
//   console.log(
//     'Vi ta in bilen för ytterligare inspektion så att vi kan ge ett rimligt bud'
//   );
// } else {
//   console.log(
//     'På grund av att alla villkoren för inspektion inte är uppfyllda kan vi inte ge ett korrekt bud'
//   );
// }

/* SWITCH UTTRYCK */
// const day = 'Lördag';

/* IF med ELSE IF och ELSE */

// if (day === 'Måndag') {
//   console.log('Måndagsmöte med kund med standup för iteration');
// } else if (day === 'Tisdag') {
//   console.log('Skriver kod');
// } else if (day === 'Onsdag') {
//   console.log('Skriver kod');
// } else if (day === 'Torsdag') {
//   console.log('Planerar nästa veckas kurs');
// } else if (day === 'Fredag') {
//   console.log('Snart är det helg');
// } else if (day === 'Lördag') {
//   console.log('Vilar upp oss');
// } else if (day === 'Söndag') {
//   console.log('Vilar upp oss');
// } else {
//   console.log('Dagen du försöker planerar finns inte än!');
// }

// if (day === 'Måndag') {
//   console.log('Måndagsmöte med kund med standup för iteration');
// } else if (day === 'Tisdag' || day === 'Onsdag') {
//   console.log('Skriver kod');
// } else if (day === 'Torsdag') {
//   console.log('Planerar nästa veckas kurs');
// } else if (day === 'Fredag') {
//   console.log('Snart är det helg');
// } else if (day === 'Lördag' || day === 'Söndag') {
//   console.log('Vilar upp oss');
// } else {
//   console.log('Dagen du försöker planerar finns inte än!');
// }

/* EFFEKTEN AV ATT GLÖMMA BREAK! */
// switch (day) {
//   case 'Måndag':
//     console.log('Måndagsmöte med kund med standup för iteration');
//   case 'Tisdag':
//     console.log('Skriver kod');
//   case 'Onsdag':
//     console.log('Skriver kod');
//     break;
//   case 'Torsdag':
//     console.log('Planerar nästa veckas kurs');
//     break;
//   case 'Fredag':
//     console.log('Snart är det helg');
//     break;
//   case 'Lördag':
//     console.log('Vilar upp oss');
//     break;
//   case 'Söndag':
//     console.log('Vilar upp oss');
//     break;
//   default:
//     console.log('Dagen du försöker planerar finns inte än!');
// }

/* SWITH MED ÄKTA FALL THROUGH */
// switch (day) {
//   case 'Måndag':
//     console.log('Måndagsmöte med kund med standup för iteration');
//     break;
//   case 'Tisdag':
//   case 'Onsdag':
//     console.log('Skriver kod');
//     break;
//   case 'Torsdag':
//     console.log('Planerar nästa veckas kurs');
//     break;
//   case 'Fredag':
//     console.log('Snart är det helg');
//     break;
//   case 'Lördag':
//   case 'Söndag':
//     console.log('Vilar upp oss');
//     break;
//   default:
//     console.log('Dagen du försöker planerar finns inte än!');
// }

/* EXPRESSION OCH STATEMENTS */
/* EXPRESSIONS PRODUCERAR ETT VÄRDE */

// 10 + 5;
// 2021;
// true && false && !false;

/* STATEMENTS UTFÖR NÅGOT */
// if (10 < 20) console.log('10 är verkligen mindre än 20');

// const x = 'x och y är två variabler';
/* x är ett statement och tilldelningen(strängen) är ett uttryck(expression) */

/* TERNARY OPERATOR - One-liner if sats */
/* Består av tre delar */
/* const time = 23;
// Del 1 = villkoret
 time <= 23
  ? // Del 2 är det sant kör denna del efter ?
    console.log('Det är dags att sova')
  : // Del 3 annars(else) kör denna del av koden.
    console.log('Inte riktig ännu');

const napTime = time <= 22 ? 'Dags att sova' : 'Inte rikigt ännu';

console.log(napTime);

console.log(
  `Är det dags att gå och lägga sig? ${
    time <= 22 ? 'jajamensan, äntligen' : 'inte riktig ännu'
  }`
);
*/

/* AKTIVERA STRICT MODE I JAVASCRIPT */
/*
  Placera aktivering först i JavaScript koden
  aktivering skall vara före någon javascript
  om inte så kommer inte aktiveringa slå igenom.
  Det är ok att ha kommentarer innan aktivering
*/

//'use strict'; //Nu är strict mode aktiverat...

// let isAllKeysReturned = true;
// const isCheckedIn = true;

// if (isCheckedIn) isAllKeyReturned = false; //Skall ge ett felmeddelande i konsolen.
// if (isCheckedIn) isAllKeysReturned = false;

// if (isAllKeysReturned) console.log('Allt är ok, dags för inspektion');
// if (!isAllKeysReturned)
//   console.log('Vi kan inte påbörja inspektionen vi saknar alla nycklar');

/* Reserverade nyckelord som kanske/förmodligen kommer att dyka upp i JavaScript någon gång i framtiden... */
// const interface = 'Sound';
// console.log(interface);

//const private = 'Min bil';
