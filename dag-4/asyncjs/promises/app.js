// BEST PRACTICES...
const addUserButton = document.querySelector('#btnText');
const displayView = document.querySelector('#display');
const spinner = document.querySelector('#spinner');

// Koppla händelser...
addUserButton.addEventListener('click', addUserButtonClicked);

let users = [
  { firstName: 'Michael', lastName: 'Gustavsson' },
  { firstName: 'Ove', lastName: 'Olsson' },
  { firstName: 'Karin', lastName: 'Nilsson' },
];

// Lägg till en ny användare
function addUser(user) {
  // Skapa ett eget Promise objekt...
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      users.push(user);

      // Fejka ett fel. Ändra error till true för att simulera ett fel.
      const error = true;
      if (error) {
        reject('Det gick åt h-e här!');
      }
      resolve();
    }, 1000);
  });
}

// Lista alla användare
function getUsers() {
  setTimeout(() => {
    let output = '';
    users.forEach((user) => {
      output += `<div>${user.firstName} ${user.lastName}</div>`;
    });

    spinner.classList.add('hidden');
    displayView.innerHTML = output;
  }, 5000);
}

// Hantera knapp klicket...
function addUserButtonClicked() {
  spinner.classList.remove('hidden');
  addUser({ firstName: 'Anna', lastName: 'Eriksson' })
    .then(getUsers())
    .catch((err) => {
      spinner.classList.add('hidden');
      alert(err);
    });
}
