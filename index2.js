// Crea un form per la creazione di oggetti "Pet" (animali domestici).
// La classe Pet dovrà essere dotata delle seguenti proprietà:
// - petName
// - ownerName
// - species // (cane, gatto, coniglio etc.)
// - breed // (labrador, soriano, nano etc.)

// Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due
  // animali condividono lo stesso padrone.
  static ownerMatch(petA, petB) {
    return petA.ownerName === petB.ownerName;
  }
}

const d = new Pet("Bobby", "Alessandro", "cane", "labrador");
const e = new Pet("Jacob", "Valeria", "cane", "dalmata");
const f = new Pet("Lessy", "Alessandro", "cane", "poliziotto");

console.log(
  `Il padrone di ${d.petName} è ${d.ownerName} e il padrone di ${f.petName}  è ${f.ownerName}`,
  Pet.ownerMatch(d, f)
);
console.log(
  `Il padrone di ${e.petName} è ${e.ownerName} e il padrone di ${f.petName}  è ${f.ownerName}`,
  Pet.ownerMatch(e, f)
);

const formNode = document.querySelector("form");
formNode.onsubmit = function (e) {
  e.preventDefault();
  // previene il comportamento di base dei form, che implica anche un ri-caricamento della pagina
  console.log("form inviato");
};
// dopo un preventDefault possimo lavorare con i dati e la manipolazione del DOM

let petNameField = document.getElementById("petNameField");
let ownerNameField = document.getElementById("ownerNameField");
let speciesField = document.getElementById("speciesField");
let breedField = document.getElementById("breedField");
let petList = document.getElementById("petList");
let addButton = document.getElementById("add");
let addButton2 = document.getElementById("add2");

let pets = [];

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      "Nome: " +
      pet.petName +
      ", Proprietario: " +
      pet.ownerName +
      ", Specie: " +
      pet.species +
      " , Razza: " +
      pet.breed;
    petList.appendChild(newLi);
  });
};
let i = 0;
addButton.onclick = function () {
  let newPet = new Pet(petNameField.value, ownerNameField.value, speciesField.value, breedField.value);
  if (
    petNameField.value === "" ||
    speciesField.value === "" ||
    ownerNameField.value === "" ||
    breedField.value === ""
  ) {
    alert("riempi tutti i campi");
  } else {
    pets.push(newPet);
    renderList();
    i++;
    console.log(i);
    if (i > 1) {
      addButton2.disabled = false;
    }

    //   per svuotare i campi
    petNameField.value = "";
    ownerNameField.value = "";
    speciesField.value = "";
    breedField.value = "";
  }
};

addButton2.onclick = function () {
  if (pets[0] === undefined || pets[1] === undefined) {
  } else {
    console.log(Pet.ownerMatch(pets[0], pets[1]));
  }
};
