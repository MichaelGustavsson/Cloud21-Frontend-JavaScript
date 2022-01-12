'use strict';

async function loadVehicles() {
  const response = await fetch('/data/vehicles.json');

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}
async function loadVehiclesFromRestApi() {
  const url = 'https://westcoast-cars-api.azurewebsites.net/api/vehicle';
  const response = await fetch(url);

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}
