'use strict';

/* Skapa variabler för varje html element som vi behöver manipulera */
const regNoInput = document.querySelector('#regNoInput');

// Fånga QueryString värdet ifrån URL'en...
const urlParams = new URLSearchParams(location.search);
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const descriptionInput = document.querySelector('#descriptionInput');

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') {
    loadVehicles().then((vehicles) => {
      const vehicle = vehicles.find((vehicle) => vehicle.id == value);
      console.log(vehicle);
      updatePage(vehicle);
      // console.log(vehicles.find((vehicle) => vehicle.id == value));
    });
  }
}

const updatePage = (vehicle) => {
  regNoInput.value = vehicle.registrationNo;
  makeInput.value = vehicle.make;
  modelInput.value = vehicle.model;
  modelYearInput.value = vehicle.modelYear;
  mileageInput.value = vehicle.mileage;
  valueInput.value = vehicle.value;
  descriptionInput.value = vehicle.description;
};
