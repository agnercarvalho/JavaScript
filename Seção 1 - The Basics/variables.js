let inbox = 100;  // declarando variável
let inbox2 = 50;

let allEmails = inbox + inbox2;

let user = 'Ag';

//alert(allEmails);

const email = 100;   // não pode declarar sem valor, dá erro - variável não muda de valor

//console.log(email);

//camelCase - convenção para nomeação de variáveis

/* comentário de várias linhas */

        // Operadores

//Básicos:
let a = 10;
console.log(a+10);
console.log(a-10);
console.log(a/2);
console.log(a ** 2);  //elevado a
console.log(a%2); // resto da divisão por 2

a++; //incrementa 1
console.log(a)

a--; //decrementa 1
console.log(a)

a += 40;  // soma 
console.log(a)


// Tipos primitivos de dados

//Numeros
const day = 5;
console.log(typeof day);

//String
const name = "Agner";
console.log(typeof name);

//Booleans 
const isLogged = true;  //ou false
console.log(typeof isLogged);

//Undefined
let month;
console.log(month);

//Null
let minute = null;
console.log(minute);

//Symbol
const simbolo = Symbol();
//vai usar pra nada


    //Concatenação

const bank1 = 100;
const bank2 = 50;
const allBanks = bank1 + bank2;

console.log(allBanks);

const greeting = "Welcome to our website";
const usuario= 'Ag';

console.log(greeting + usuario);

const greeting2 = `Hey there welcome to our website, ${usuario}`;    //concatenação
console.log(greeting2);

// somar 1 + '1' - vai retornar uma string com 11 


