'use strict';

const vehicleTable = document.querySelector('#vehicle-list');

function createTable(vehicleList) {
  // Skapa en variabel för att hålla html elementen för att kunna skapa
  // vår tabell...
  let html = '';

  // Iterera igenom listan av bilar och skapa en ny rad med kolumner för varje bil...
  for (let car of vehicleList) {
    // Skall vi skapa html för varje bils egenskap som kolumn i tabellen...
    //id, registrationNo, make, model, modelYear, mileage, value
    // använd html variabeln ovan och slå samman varje bils html med varje rad...

    // Skapa en rad med kolumner via document.createElement()...
    /*
    let tr = document.createElement('tr');
    let edit = document.createElement('td');
    let id = document.createElement('td');
    let regNo = document.createElement('td');
    let make = document.createElement('td');
    let model = document.createElement('td');
    let modelYear = document.createElement('td');
    let mileage = document.createElement('td');
    let value = document.createElement('td');
    let del = document.createElement('td');

    edit.textContent = 'x';
    id.textContent = car.id;
    regNo.textContent = car.registrationNo;
    make.textContent = car.make;
    model.textContent = car.model;
    modelYear.textContent = car.modelYear;
    mileage.textContent = car.mileage;
    value.textContent = car.value;
    del.textContent = 'y';

    tr.appendChild(edit);
    tr.appendChild(id);
    tr.appendChild(regNo);
    tr.appendChild(make);
    tr.appendChild(model);
    tr.appendChild(modelYear);
    tr.appendChild(mileage);
    tr.appendChild(value);
    tr.appendChild(del);

    vehicleTable.appendChild(tr);
    */

    // Det lite mer moderna och nya sättet att dynamiskt skapa html...
    html += `
      <tr>
        <td><i class="fal fa-pencil-alt edit"></i></td>
        <td>${car.id}</td>
        <td>${car.registrationNo}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.modelYear}</td>
        <td>${car.mileage}</td>
        <td>${car.value}</td>
        <td><i class="far fa-trash-alt"></i></td>
      </tr>
    `;
  }

  // Placera värdet i html variabeln till vehicleTable variabel ovan
  // Tänk på att använda insertAdjecentHTML och vilken position som raden skall placeras på...
  vehicleTable.insertAdjacentHTML('beforeend', html);

  //Iterera igenom alla rader och plocka ut kolumnen för redigering...
  let tableRows = document.querySelectorAll('.table-container .edit');
  console.log(tableRows);

  tableRows.forEach((item) => {
    // Traversera dom för att få tag i identiteten för varje bil...
    const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;

    // Skapa en klick händelse på ikonen penna...
    console.log(item);
    item.addEventListener('click', () => {
      console.log(`Du klickade på bil med identitet ${id}`);
    });
  });
}

async function loadVehicles() {
  const response = await fetch('/data/vehicles.json');

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

loadVehicles()
  .then((data) => {
    createTable(data);
  })
  .catch((err) => console.log(err));
