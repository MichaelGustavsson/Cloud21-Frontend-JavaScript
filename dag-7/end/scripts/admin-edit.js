'use strict';

/* Skapa variabler för varje html element som vi behöver manipulera */
const regNoInput = document.querySelector('#regNoInput');
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const descriptionInput = document.querySelector('#descriptionInput');

const saveButton = document.querySelector('#save');
const cancelButton = document.querySelector('#cancel');

let vehicle;
let vehiclesList;

cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = 'administration.html';
});

saveButton.addEventListener('click', updateVehicle);

const updatePage = (vehicle) => {
  try {
    regNoInput.value = vehicle.registrationNumber;
    makeInput.value = vehicle.make;
    modelInput.value = vehicle.model;
    modelYearInput.value = vehicle.modelYear;
    mileageInput.value = vehicle.mileage;
    valueInput.value = vehicle.value;
    descriptionInput.value = vehicle.description;
  } catch (error) {
    console.log('Det gick lite fel här', error);
  }
};

function initPage() {
  console.log('Initierar admin-edit sidan');
  // Fånga QueryString värdet ifrån URL'en...
  const urlParams = new URLSearchParams(location.search);

  for (let [key, value] of urlParams) {
    if (key === 'vehicleId') {
      vehiclesList = JSON.parse(localStorage.getItem('vehicleData'));
      console.log(vehiclesList);

      vehicle = vehiclesList.find((vehicle) => vehicle.id == value);
      updatePage(vehicle);
    }
  }
}

function updateVehicle(e) {
  e.preventDefault();

  try {
    let tmpVehicle = {
      id: vehicle.id,
      registrationNumber: regNoInput.value,
      make: makeInput.value,
      model: modelInput.value,
      modelYear: modelYearInput.value,
      mileage: mileageInput.value,
      value: valueInput.value,
      description: descriptionInput.value,
      imageUrl: vehicle.imageUrl,
    };

    console.log(tmpVehicle);

    const index = vehiclesList.findIndex((item) => item === vehicle);

    vehiclesList.splice(index, 1, tmpVehicle);
    console.log(vehiclesList);

    localStorage.setItem('vehicleData', JSON.stringify(vehiclesList));
    location.href = 'administration.html';
  } catch (error) {
    console.log('Det gick lite fel här!', error);
  }
}

initPage();
