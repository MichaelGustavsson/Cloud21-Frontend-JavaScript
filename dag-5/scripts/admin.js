'use strict';

const vehicleTable = document.querySelector('#vehicle-list');

function createTable(vehicleList) {
  // Skapa en variabel för att hålla html elementen för att kunna skapa
  // vår tabell...
  let html = '';

  // Iterera igenom listan av bilar och skapa en ny rad med kolumner för varje bil...
  for (let car of vehicleList) {
    console.log(car);

    // Skall vi skapa html för varje bils egenskap som kolumn i tabellen...
    //id, registrationNo, make, model, modelYear, mileage, value
    // använd html variabeln ovan och slå samman varje bils html med varje rad...
  }

  // Placera värdet i html variabeln till vehicleTable variabel ovan
  // Tänk på att använda insertAdjecentHTML och vilken position som raden skall placeras på...
}

async function loadVehicles() {
  const response = await fetch('/data/vehicles.json');

  console.log(response);

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

loadVehicles()
  .then((data) => {
    console.log(data);
    createTable(data);
  })
  .catch((err) => console.log(err));
