// CREO UNA FUNZIONE PER FARE REVERS SULLE STRINGHE
function reverseString(str) {
  // Creo una stringa vuota per mantenere il contrario
  let reversed = "";

  // uso un ciclo for per cambiare la parola originale
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

const userWord = prompt("");
console.log(userWord);

reverseString(userWord);
console.log(reverseString(userWord));

// Creo una variabile di output
let outputText = "La parola non è palindroma";

// Se userWord è uguale a reverseString(userWord)
if (userWord === reverseString(userWord)) {
  outputText = "La parola è palindroma";
}

// Stampo l'output
console.log(outputText);
