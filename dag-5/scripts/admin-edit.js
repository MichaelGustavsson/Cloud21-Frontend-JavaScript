'use strict';

// Fånga QueryString värdet ifrån URL'en...
const urlParams = new URLSearchParams(location.search);
console.log(urlParams);

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') {
    console.log(value);
  }
}

async function fetchVehicle(id) {
  // Hitta bilen med hjälp av id i JSON datat...
  // Använd console.log för att visa upp bilen...
}
