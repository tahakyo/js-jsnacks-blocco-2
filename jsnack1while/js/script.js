// programma con while

let sum = 0
let i = 0

while (i < 5) {
   const userInput = parseInt(prompt('inserisci un numero'));
   console.log(userInput);
   sum += userInput;
   i++;
}

console.log(sum);