// JSsnack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const numberInput = Number(prompt('Inserisci un numero'));

if(numberInput % 2==0){
   console.log(numberInput);
 }
 else {
    console.log(numberInput + 1);
 }