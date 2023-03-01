'use strict';

// for(let i=0; i<=5; i++){
//     const input= Number(prompt('Inserisci un numero'));
//     console.log(input);
// };

let sum = 0;
let inputNum = 1;


while(inputNum <= 5){
    const input = Number(prompt(`Inserisci un numero (${inputNum})`));
    
    if(!isNaN(input)){
        sum += input;
        inputNum++;     
    }
}
alert(sum);