'use strict';

// Skapa en funktion som fungerar som en klass i javascript...
// Funktion med argument som skall instantieras kallas för konstruktor...
/*
const Vehicle = function (regNo, make, model) {
  // console.log(`Hello from vehicle ${regNo} ${make} ${model}`);
  // Definiera egenskaper i JavaScript...
  this.registrationNumber = regNo;
  this.manufacturor = make;
  this.vehicleModel = model;

  this.vehicleName = `${make} - ${model}`;
};

// Skapa en metod för klassen Vehicle...
Vehicle.prototype.displayInfo = function () {
  console.log(`${this.manufacturor} - ${this.vehicleModel}`);
};

// Instantiera en ny instans av Vehicle funktionen...
const vehicle1 = new Vehicle('ABC123', 'Volvo', 'V90');
console.log(vehicle1);

vehicle1.displayInfo();

// OBJECT CREATE...
// Ny klass...
// Ett anonymt objekt...😁
const Course = {
  //Konstruktor...
  init(courseNumber, title, days) {
    this.courseNo = courseNumber;
    this.courseTitle = title;
    this.courseLength = days;
  },

  displayInfo() {
    // console.log(`Här är mer info om kursen... ${this.courseTitle}`);
    return `Här är mer info om kursen... ${this.courseTitle}`;
  },
};

const frontEndCourse = Object.create(Course); // Skapar en instans av objektet Course

console.log(frontEndCourse);
frontEndCourse.init(1514, 'FrontEnd course back to end', 2);
console.log(frontEndCourse);

const info = frontEndCourse.displayInfo();
console.log(info);

console.log(frontEndCourse, frontEndCourse.__proto__);
*/

// E6 klasser 🤓
class Vehicle {
  // constructor() {
  //   this.id = 1;
  //   this.registrationNumber = '';
  //   this.manufacturor = '';
  //   this.vehicleModel = '';
  // }
  constructor(id, regNo, make, model) {
    this.id = id;
    this.registrationNumber = regNo;
    this.manufacturor = make;
    this.vehicleModel = model;
    this._modelYear = 0; // detta är en fejk för att låtsat att vi har en private egenskap...
  }

  //getters...
  get vehicleMake() {
    return this.manufacturor.toUpperCase();
  }

  get modelYear() {
    return this._modelYear;
  }

  //setters...
  set modelYear(value) {
    if (value > 2022) {
      alert('Bilen finns inte ännu, den ligger i framtiden...');
    } else {
      this._modelYear = value;
    }
  }

  displayInfo() {
    return `Här är lite mer info om bilen ${this.vehicleModel}`;
  }
}

const volvo = new Vehicle(1, 'ABC123', 'Volvo', 'XC90');

console.log(volvo);

const info = volvo.displayInfo();
console.log(info);

console.log(volvo.vehicleMake);

volvo.modelYear = 2018;

console.log(volvo.modelYear);
console.log(volvo._modelYear);
