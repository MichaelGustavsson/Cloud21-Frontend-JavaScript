// Best Practices...
const buttonLoadText = document.querySelector('#btnText');
const buttonLoadJson = document.querySelector('#btnJson');
const spinner = document.querySelector('#spinner');
const displayView = document.querySelector('#display');

// Lägg till händelser...
buttonLoadText.addEventListener('click', getText);

// Skapa funktioner...
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
