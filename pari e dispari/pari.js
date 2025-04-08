// ###############################################################
// FUNCTIONS
// ###############################################################
// ADESSO TRAMITE LA FUNZIONE GENERIAMO UN NUMERODA 1 A 5 PER IL PC..
function getRandomNumberFrom1To6(max, min) {
  const randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
}

function isFinalSumIsOddOrEven() {
  //se la somma dei numeri è pari
  if (sumUserAndPcNumber % 2 === 0) {
    isPari = " Pari";
    return isPari;
  }

  isDispari = "Dispari";
  // se è dispari
  return isdispari;
}
// ###############################################################
// MAIN
// ###############################################################

// PARI E DISPARI
// L`UTENTE SCEGLIE TRA PARI E DISPARI...
const oddAndEven = prompt("scegli pari o dispari");
// stampo la scelta dell`utente
console.log("utente sceglie", oddAndEven);
// ED INSERISCE UN NUMERO DA 1 A 5
const userNumber = prompt("inserisci un numero da 1 a 6");
// stampo il numero scelto dall`uteente
console.log("utenete sceglie il numero:", userNumber);
// DICHIARO IL VALORE DEL NUMERO DEL PC
const pcNumber = getRandomNumberFrom1To6(6, 1);
//STAMPO IL NUMERO DEL PC
console.log(pcNumber);
// FACCIO LA SOMMA DEL PC NUMBER E DEL USERNUMBER
const sumUserAndPcNumber = userNumber + pcNumber;
// STAMPO LA SOMMA FINALE
console.log(sumUserAndPcNumber);
console.log(isFinalSumIsOddOrEven());
