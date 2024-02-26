// Crea una classe User per la creazione di oggetti di tipo "utente". Il suo costruttore dovra inizializzare ogni oggetto utente con i seguenti attributi:

// - firstName
// - lastName
// - age
// - location

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  // Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
  // Ad esempio, date due istanze della classe utente "x" e "y" inizializzate con le proprietà sopra descritte, il
  // metodo dovrà restituire una frase simile a "x è più vecchio di y" a seconda del risultato del confronto.
  static ageMatch(ageA, ageB) {
    if (ageA.age > ageB.age) {
      return `${ageA.firstName} è più vecchio di ${ageB.firstName}`;
    } else if (ageA.age === ageB.age) {
      return `${ageA.firstName} e ${ageB.firstName} hanno la stessa età`;
    } else {
      return `${ageB.firstName} è più vecchio di ${ageA.firstName}`;
    }
  }
}

// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni
// correttamente.

const a = new User("Alessandro", "Carrese", 33, "Napoli");
const b = new User("Valeria", "Vita", 25, "Massafra");
const c = new User("Marco", "Stella", 33, "Taranto");

console.log(User.ageMatch(a, b));
console.log(User.ageMatch(a, c));
console.log(User.ageMatch(b, c));
