'use strict';

const vehicleTable = document.querySelector('#vehicle-list');

function createTable(vehicleList) {
  let html = '';

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

  //Iterera igenom alla rader och plocka ut kolumnen för redigering...
  // Hämta in ALLA rader och returnera alla kolumner som har css klassen .edit under klassen .table-container...
  let tableRows = document.querySelectorAll('.table-container .edit');
  // console.log(tableRows);

  tableRows.forEach((item) => {
    // Traversera dom för att få tag i identiteten för varje bil...
    // console.log(item);
    // console.log(item.parentNode);
    // console.log(item.parentNode.parentNode);
    // console.log(item.parentNode.parentNode.children);
    // console.log(item.parentNode.parentNode.children[1]);
    // console.log(item.parentNode.parentNode.children[1].firstChild.nodeValue);

    //Utgå ifrån <i></i> gå hela vägen upp till <tr></tr> sedan hämta 2:a barn elementet vilket är <td></td> för id. Hämtar ut första barnets värdet.
    // const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;
    const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;
    // console.log(id);
    // Skapa en klick händelse på ikonen penna...
    item.addEventListener('click', () => {
      // console.log(`Du klickade på bil med identitet ${id}`);
      // Navigera till en ny sida med hjälp av webbläsarens location api.
      // Skapa en frågesträng(querystring) ? lägg till en variabel(vehicleId)
      // och sätt variabelns värde till det hämtade värdet ur item.
      // console.log(`Jag klickade på bilen med id ${id}`);
      location.href = `edit.html?vehicleId=${id}`;
    });

    // Skapa en händelse hanterare som även kan indikera att vi vill
    // ta bort en bil ur listan...
    // Använd Console.log för att indikera att vi tar bort en bil...
    // Extra bonus! försök att ta bort den ur vår array...
    tableRows = document.querySelectorAll('.table-container .delete');
    // console.log(tableRows);

    tableRows.forEach((item) => {
      const id = item.parentNode.parentNode.children[1].firstChild.nodeValue;
      // console.log(id);

      item.addEventListener('click', () => {
        console.log(`Jag klickade för att ta bort bilen med id ${id}`);
      });
    });
  });
}

loadVehicles()
  .then((data) => {
    console.log(data);
    createTable(data);
  })
  .catch((err) => console.log(err));

// loadVehiclesFromRestApi()
//   .then((data) => {
//     console.log(data);
//     createTable(data);
//   })
//   .catch((err) => console.log(err));
