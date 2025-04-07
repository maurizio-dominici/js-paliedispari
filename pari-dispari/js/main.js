// CREO UNA FUNZIONE PER NUMERI RANDOM
function randomNumber(max, min) {
  const randomNmuber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNmuber;
}

// CREO UNA FUNZIONE PER LA SOMMA DEI NUMERI che definisce se è pari o dispari
function sumNumber(num1, num2) {
  const sumNumber = num1 + num2;

  let outputnumber = "dispari";

  if (sumNumber % 2 === 0) {
    outputnumber = "pari";
  }
  return outputnumber;
}

// CREO UNA CONST PER I NUMERI RANDOM DEL PC UTILIZZANDO LA FUNZIONE RUNDOMNUMBER
const randomNumberPc = randomNumber(5, 1);
const selectUser = prompt("Scegli pari o dispari");
const selectUserNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
let outputWinner = "PC vince";

sumNumber(randomNumberPc, selectUserNumber);

if (sumNumber(randomNumberPc, selectUserNumber) === selectUser) {
  outputWinner = "USER vince";
}

console.log("randomNumberPc", randomNumberPc);
console.log("selectUser", selectUser);
console.log("selectUserNumber", selectUserNumber);
console.log(
  "sumNumber(randomNumberPc, selectUserNumber)",
  sumNumber(randomNumberPc, selectUserNumber)
);
console.log("outputWinner", outputWinner);
