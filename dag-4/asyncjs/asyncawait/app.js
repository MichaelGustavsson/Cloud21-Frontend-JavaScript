// Best Practices...
const buttonLoadText = document.querySelector('#btnText');
const buttonLoadJson = document.querySelector('#btnJson');
const spinner = document.querySelector('#spinner');
const displayView = document.querySelector('#display');

// Lägg till händelser...
buttonLoadText.addEventListener('click', getText);
buttonLoadJson.addEventListener('click', buttonLoadJsonData);

// Skapa funktioner...

// Starta hämtning av json data...
async function buttonLoadJsonData() {
  const vehicles = await getJson();
  renderHtml(vehicles);
}

async function getText() {
  // Fetch Api...
  // Promise baserad...
  // fetch('data.txt').then((response) => {
  //   console.log(response);
  //   response.text().then((data) => {
  //     console.log(data);
  //   });
  // });

  const response = await fetch('data.txt');
  console.log(response);

  if (!response.ok) throw new Error(response.statusText);

  // Hämta data(texten) ifrån response objektets body...
  const text = await response.text();
  displayView.innerHTML = text;
}

async function getJson() {
  // Fetch Api...
  // Promised baserad...
  // fetch('vehicles.json').then((response) => {
  //   console.log(response);
  //   response.json().then((data) => {
  //     console.log(data);
  //     data.forEach((vehicle) => {
  //       console.log(vehicle.make);
  //     });
  //   });
  // });

  // Async Await baserat...
  const response = await fetch('vehicles.json');

  if (!response.ok) throw new Error(response.statusText);

  // Plocka ut json datat ur response body...
  return await response.json();
}

function renderHtml(vehicles) {
  let html = '';
  vehicles.forEach((vehicle) => {
    html += `<div>${vehicle.registrationNo} <span>${vehicle.make}</span><span> ${vehicle.model}</span></div>`;
  });

  displayView.innerHTML = html;
}
