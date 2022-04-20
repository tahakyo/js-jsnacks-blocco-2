// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Creo due liste uno con i nomi e l altra con i cognomi

const firstNames = ["taha", "matteo", "sara", "carlo", "zefiro"];
const lastNames = ["farci", "ghazouani", "gennuardi", "sarli", "turchetta"];

fakeName = [];

for (let i = 0; i < 3; i++) {
    // genero un numero index random dalla lista firstNames
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    console.log("indice nome", randomFirstNameIndex);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
    console.log(randomLastNameIndex);
    // unisco l index generato alla lista dei nomi
    const randomFirstName = firstNames[randomFirstNameIndex];
    console.log("Nome", randomFirstName);
    // unisco l'index generato al cognome
    const randomLastName = lastNames[randomLastNameIndex];
    console.log("cognome", randomLastName);
    // unisco i due elementi estratti
    const randomPerson = `${randomFirstName} ${randomLastName}`
    // aggiungo il nome della persona generata nel mio array
    fakeName.push(randomPerson);
}

console.log(fakeName);