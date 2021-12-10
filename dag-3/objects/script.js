'use strict';

/* ARBETA MED OBJEKT */
// Object literal syntax...
const vehicle = {
  regNo: 'CER932',
  make: 'Renault',
  model: 'Trafic',
  modelYear: 2011,
  mileage: 89500,
  isServiced: true,
  equipments: ['Cruise Control', 'Navigator', 'Parking sensor'],
};

console.log(vehicle);

// Åtkomst till egenskaperna i objektet.
// Via punkt notation...
const regNo = vehicle.regNo;
console.log(regNo);

// Via objektets indexer.
const model = vehicle['model'];
console.log(model);

const customer = {
  firstName: 'Kalle',
  lastName: 'Anka',
  phone: '123456',
};

const key = 'Name';
console.log(customer['first' + key]);
console.log(customer['last' + key]);

// Dynamiskt lägga till nya egenskaper...
vehicle.color = 'Silver';

console.log(vehicle);

// Arbeta med metoder i objekt...
const car = {
  regNo: 'RNZ44Y',
  make: 'BMW',
  model: 'X3',
  modelYear: 2019,
  mileage: 15000,
  isServiced: true,
  equipments: ['Cruise Control', 'Navigator', 'Parking sensor', 'Automatic'],
  //Function Expression!!! = Metod i objektet...
  averageKmPerYear: function (currentYear) {
    console.log('this', this);
    console.log(`CurrentYear = ${currentYear}`);
    console.log(`Mileage = ${this.mileage}`);
    console.log(`ModelYear = ${this.modelYear}`);
    const result = this.mileage / (currentYear - this.modelYear);
    console.log(`Resultatet = ${result}`);
    console.log('Inifrån objektets metod');
    //return `Bilen har gått ${result} per år i snitt`;
    this.averageMileage = result;
  },
};

car.regNo = 'ABC123';
console.log(car);
car.averageKmPerYear(2021);
console.log(car.averageMileage);
//console.log(averageMessage);

const vehicles = [
  {
    regNo: 'CER932',
    make: 'Renault',
    model: 'Trafic',
    modelYear: 2011,
    mileage: 89500,
    isServiced: true,
    equipments: ['Cruise Control', 'Navigator', 'Parking sensor'],
  },
  {
    regNo: 'RNZ44Y',
    make: 'BMW',
    model: 'X3',
    modelYear: 2019,
    mileage: 15000,
    isServiced: true,
    equipments: ['Cruise Control', 'Navigator', 'Parking sensor'],
  },
  {
    regNo: 'BYD63E',
    make: 'Volvo',
    model: 'V60',
    modelYear: 2019,
    mileage: 18000,
    isServiced: true,
    equipments: ['Cruise Control', 'Navigator', 'Parking sensor'],
  },
];

console.log(vehicles);
console.log(vehicles[2].make);
