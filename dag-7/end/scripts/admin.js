'use strict';

const vehicleTable = document.querySelector('#vehicle-list');

function createTable(vehicleList) {
  let html = '';

  //Töm <tbody></tbody> på dess data...
  vehicleTable.innerHTML = '';

  /* Skapa tabellen dynamiskt */
  for (let car of vehicleList) {
    html += `
      <tr>
        <td><i class="fal fa-pencil-alt edit"></i></td>
        <td>${car.id}</td>
        <td>${car.registrationNumber}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.modelYear}</td>
        <td>${car.mileage}</td>
        <td>${car.value == undefined ? 0 : car.value}</td>
        <td><i class="far fa-trash-alt delete"></i></td>
      </tr>
    `;
  }

  vehicleTable.insertAdjacentHTML('beforeend', html);

  /* Slut på skapandet av tabellen */

  let tableRows = document.querySelectorAll('.table-container .edit');

  // Aktivera ändringsmöjlighet av vald bil...
  tableRows.forEach((item) => {
    // Traversera dom för att få tag i identiteten för varje bil...
    const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;

    // Skapa en klick händelse på ikonen penna...
    item.addEventListener('click', () => {
      location.href = `edit.html?vehicleId=${id}`;
    });
  });

  tableRows = document.querySelectorAll('.table-container .delete');

  // Aktivera borttagning av vald bil...
  tableRows.forEach((item) => {
    const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;

    item.addEventListener('click', () => {
      const vehicle = vehicleList.find((vehicle) => vehicle.id == id);
      const index = vehicleList.findIndex((element) => element === vehicle);
      // splice tar som första argument vilket index som vi skall starta på.
      // som andra argument hur många element skall tas bort...
      vehicleList.splice(index, 1);

      localStorage.setItem('vehicleData', JSON.stringify(vehicleList));

      createTable(vehicleList);
    });
  });
}

function initPage() {
  const data = JSON.parse(localStorage.getItem('vehicleData'));

  if (data != null && data.length > 0) {
    createTable(data);
  } else {
    loadVehicles()
      .then((data) => {
        localStorage.setItem('vehicleData', JSON.stringify(data));
        createTable(data);
      })
      .catch((err) => console.log(err));
  }
}

initPage();
