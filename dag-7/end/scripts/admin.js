'use strict';

const vehicleTable = document.querySelector('#vehicle-list');
// Hämta en referens till deleteDialog...
const deleteVehicleModal = document.querySelector('#deleteVehicleDialog');
// Hämta en referens till overlay html...
const overlay = document.querySelector('.overlay');
// Hämta refenser till att kunna stänga delete dialogrutan...
const closeDeleteModal = document.querySelector('#closeDeleteModal');
const cancelDeleteModal = document.querySelector('#cancelDelete');
// Hämta en refens till knappen delete i deleteVehicleDialog...
const deleteVehicle = document.querySelector('#delete');
// Hämta en referens till span elementet som finns i delete dialogens h2...
const vehicleInfoToRemove = document.querySelector('.modal-title > p');
// Hämta en referens till table footer...
const vehicleInStock = document.querySelector('.table-footer > h4');
// Hämta en referens till knappen lägga till ny bil...
const addNewVehicleButton = document.querySelector('#addNewVehicle');
// Hämta en refens till dialog rutan för att lägga till ny bil...
const addNewVehicleModal = document.querySelector('#addVehicleDialog');
// Hämta en referens till knappen avbryt i dialogrutan addNewVehicleModal...
const cancelAddVehicle = document.querySelector('#cancelAddVehicle');
// Hämta referens till addNewVehicleModals kryss knapp för att stänga dialogrutan...
const closeAddVehicleModel = document.querySelector('#closeAddVehicleModal');
// Hämta en referens till spara knappen i addNewVehiclesModals dialogrutan...
const saveVehicle = document.querySelector('#saveVehicle');
// Hämt referenser till varje input fält i formuläret...
const regNoInput = document.querySelector('#regNoInput');
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const descriptionInput = document.querySelector('#descriptionInput');

// Deklarera en variable som är global för admin.js filen...
let indexToRemove = 0;
let indexToUse = 200;

// Funktion för att stänga fönster och overlay för Delete dialogrutan...
// Function Expression...
const closeDeleteDialog = () => {
  deleteVehicleModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Funktion för att stänga fönster och overlay för AddNewVehicle dialogrutan...
// Function Expression...
const closeAddVehicleDialog = () => {
  addNewVehicleModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeDeleteModal.addEventListener('click', closeDeleteDialog);
cancelDeleteModal.addEventListener('click', closeDeleteDialog);

// Aktivera möjlighet att stänga dialogrutor med Esc tangenten...
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!deleteVehicleModal.classList.contains('hidden')) {
      closeDeleteDialog();
    }

    if (!closeAddVehicleModel.classList.contains('hidden')) {
      closeAddVehicleDialog();
    }
  }
});

// Aktivera möjlighet att lägga till ny bil i systemet...
addNewVehicleButton.addEventListener('click', () => {
  addNewVehicleModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Funktioner för att stänga addNewVehicle dialogrutan när vi klickar på krysset eller på avbryt...
closeAddVehicleModel.addEventListener('click', () => {
  closeAddVehicleDialog();
});

cancelAddVehicle.addEventListener('click', (e) => {
  e.preventDefault();

  const vehicleList = JSON.parse(localStorage.getItem('vehicleData'));

  closeAddVehicleDialog();
});

// Aktivera möjlighet att lägga till en ny bil i systemet...
saveVehicle.addEventListener('click', (e) => {
  e.preventDefault();

  // Hämta bilarna som finns i localStorage och konvertera till en JavaScript objekt array...
  const vehicleList = JSON.parse(localStorage.getItem('vehicleData'));

  let maxId = Math.max(...vehicleList.map((list) => list.id));
  maxId += 1;

  // Skapa ett objekt med alla egenskaper som vi behöver.
  // Hämta värdena för respektive egenskap ifrån referense i formuläret...
  const vehicle = {
    id: maxId,
    registrationNumber: regNoInput.value,
    make: makeInput.value,
    model: modelInput.value,
    modelYear: modelYearInput.value,
    mileage: mileageInput.value,
    value: valueInput.value,
    description: descriptionInput.value,
  };

  // Lägg till den nya bilen i vår array...
  vehicleList.push(vehicle);

  // Skriv ner den nya listan av bilar till localStorage...
  localStorage.setItem('vehicleData', JSON.stringify(vehicleList));
  // Rita om tabellen igen...
  createTable(vehicleList);
  // Stäng dialogrutan...
  closeAddVehicleDialog();

  // Töm inmatningsfältet på gammal information...
  regNoInput.value = '';
  makeInput.value = '';
  modelInput.value = '';
  modelYearInput.value = '';
  mileageInput.value = '';
  valueInput.value = '';
  descriptionInput.value = '';
});

// Aktivera möjlighet att ta bort en vald bil...
deleteVehicle.addEventListener('click', () => {
  // Steg 1. läsa in listan av befintliga bilar ifrån localStorage...
  const vehicleList = JSON.parse(localStorage.getItem('vehicleData'));

  // Steg 2. Ta bort ur vår array(vehicleList)...
  vehicleList.splice(indexToRemove, 1);
  // Steg 3. Uppdatera localStorage med vår nya array(vehicleList)...
  localStorage.setItem('vehicleData', JSON.stringify(vehicleList));
  // Steg 4. Uppdatera tabellen...
  createTable(vehicleList);
  // Steg 5. Stäng dialogruta och ta bort overlay...
  closeDeleteDialog();
});

function createTable(vehicleList) {
  let html = '';

  // Ange antal bilar i lager...
  vehicleInStock.textContent = `Antal bilar lager i lager ${vehicleList.length}`;

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
      deleteVehicleModal.classList.remove('hidden');
      overlay.classList.remove('hidden');

      const vehicle = vehicleList.find((vehicle) => vehicle.id == id);
      const index = vehicleList.findIndex((element) => element === vehicle);

      vehicleInfoToRemove.textContent = `${vehicle.registrationNumber} ${vehicle.make} ${vehicle.model}`;

      indexToRemove = index;
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
