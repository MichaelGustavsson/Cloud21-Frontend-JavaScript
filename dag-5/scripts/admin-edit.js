'use strict';

// Fånga QueryString värdet ifrån URL'en...
const urlParams = new URLSearchParams(location.search);

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') {
    loadVehicles().then((vehicles) => {
      console.log(vehicles.find((vehicle) => vehicle.id == value));
    });
  }
}

async function loadVehicles() {
  const response = await fetch('/data/vehicles.json');

  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
