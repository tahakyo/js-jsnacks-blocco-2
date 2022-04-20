// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;
// programma con for
for (let i = 0; i < 5; i++) {
    // chiedo all'utente di inserire un numero per 5 volte
   const userInput = parseInt(prompt('inserisci un numero'));
   console.log(userInput);
    //stampo la somma di tutti i numeri inseriti con il programma
    sum = userInput + i;
}
console.log(sum);

