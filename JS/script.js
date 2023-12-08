/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function reverse(str) {
  let rev_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }

  return rev_str;
}

function is_palindrome(str) {
  reverse_str = reverse(str);

  if (reverse_str === str) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}
let word = prompt("inserisci una parola!");
is_palindrome(word);

/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
