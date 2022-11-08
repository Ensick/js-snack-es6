/* 
Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4


Snack 2
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */

/* Snack-1 */

/* const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const NumeroMinimo = 2

const NumeroMassimo = 5


const nomiNuovi = myArray.filter((element, index) => {

    if(index < 5 && index > 2){
        return element
    }

})

console.log(nomiNuovi)

 

/* Snack-2 */

/* let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];



const nomiMaiuscolo = students.map((element) => {

    return element.name.toUpperCase()

})

console.log(nomiMaiuscolo)



const votoSudente = students.filter((element) => {

if(element.grades > 70){

   element

   return true
    
}

})

console.log(votoSudente) 


const votoIdSudente = students.filter((element) => {

if(element.grades > 70 && element.id > 120){

   element

   return true
    
}

})

console.log(votoIdSudente)  */


/* 
Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */



/* Snack-3 */

const arrayBici = [

  {
    nome : "BMX",
    peso : 10
  },

  {
    nome : "Mountain-Bike",
    peso : 15
  },

  {
    nome : "Speed-Bike",
    peso : 5
  },

  {
    nome : "Speed-Bike-v2",
    peso : 3
  }

]

const {nome,peso} = arrayBici[3]

console.log(nome,peso)

document.getElementById("biciLeggera").innerHTML = `La bici più leggera è: ${nome} con un peso di ${peso}kg `

/* Snack-4  */

let squadreCalcio = [
  {
    squadra : "Roma",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Napoli",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Fiorentina",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Milan",
    punti : 0,
    falli : 0
  }

]


function cpuNumberGenerator(min,max){

  return Math.floor(Math.random() * (max - min + 1) + min);
};

let arraySquadraFalli = []

squadreCalcio.forEach(element => {

  element.punti = cpuNumberGenerator(1,100)

  element.falli = cpuNumberGenerator(1,100)

  arraySquadraFalli.push(element.squadra, element.falli)

})

console.log(squadreCalcio)

console.log(arraySquadraFalli)





















