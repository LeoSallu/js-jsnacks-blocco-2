//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
//Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['Franco', 'Pippo', 'Marco', 'Giulio']
const cognomi=[' Bianchi', ' Rossi', ' Verdi', ' Conti']
nomeCognome = [...nomi, ...cognomi];
for(i=0; i<nomeCognome.length; i++){
    console.log(nomi[i] + cognomi[i]);
}