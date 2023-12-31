/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
I principali datatype in javascript sono:

- numeri interi negativi e positivi, numeri decimali;
-stringhe, ossia insieme di caratteri alfanumerici che vengono inseriti all'interno di apici oppure virgolette;
- booleani, che, a seguito di interrogazioni attraverso operatori di uguaglianza e differenza, danno come ridultato True e False;
- undefined, variabile che non ha un valore associato;
- null, il valore della varibiale è vuoto;
*/
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/*Un oggetto in JavaScript rappresenta una cosa oppure una persona con diverse caratteristiche chiamate proprietà. 
*/


/* ESERCIZIO 3
 Scrivi il 
  codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let primoNumero= 12;
let secondoNumero= 20;

let risultato= 'Il risultato della somma tra 12 e 20 è '+ (primoNumero + secondoNumero);

console.log(risultato)

/*ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12;

/*ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name= 'Stefania';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x-4)

//ESERCIZIO 

let persona={
    name:'Stefania',
    cognome: 'Struzzi',
    hobby: 'arrampicata',
}


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1='john';
let name2='John';

console.log(name1!==name2)

console.log(name2.toLowerCase()==name1)
