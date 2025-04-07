// PARI E DISPARI
// L`UTENTE SCEGLIE TRA PARI E DISPARI...
const oddAndEven = prompt("scegli pari o dispari");
// ED INSERISCE UN NUMERO DA 1 A 5
const userNumber = prompt("inserisci un numero da 1 a 5");
// ADESSO TRAMITE LA FUNZIONE GENERIAMO UN NUMERODA 1 A 5 PER IL PC..
function pcRandomNumber() {
  let pcNumber = Math.floor(Math.random() * 6) + 1;
  return true;
}
console.log(pcRandomNumber(pcNumber));
