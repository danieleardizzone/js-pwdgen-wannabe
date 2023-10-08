// # PASSWORD GENERATOR

// - Chiedere all'utente il nome

const name = prompt ('Scrivi il tuo nome');
console.log(name);

// - Chiedere all'utente il cognome

const surname = prompt ('Scrivi il tuo cognome');
console.log(surname);

// - Chiedere all'utente il colore preferito

const color = prompt ('Scrivi il tuo colore preferito');
console.log(color);

// - Generare un numero di 3 cifre casuale

const MIN = 100;

const MAX = 999;

const num = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(num);

// - Concatena tutti i risultati (nomecognomecolorepreferito123)

const password = name + surname + color + num;
console.log(password);

// - Stampa il risultato sulla pagina

document.getElementById('title').innerHTML = ('La tua password è: ' + password)