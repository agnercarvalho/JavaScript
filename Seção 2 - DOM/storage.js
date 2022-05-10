

// *** STORAGE ***

localStorage.setItem('user', 'Luki') //atribulos: 'chave','valor'
sessionStorage.setItem('todolist','session feed the cat');

//* Session Storage apaga toda vez que fecha o browser, Local não.
//* Setar valores para a mesma chave reescreve o valor.

// localStorage.clear();  //apaga
// sessionStorage.clear();

// Pegando valores de volta
const user = localStorage.getItem("user");
console.log(user, typeof user);

// *** METODO DE CONVERSÃO JSON FUNCIONA COM ARRAYS E OBJETOS! ***
// const todoList = ['atv a','atv b','atv c'];
const todoList = {
    todo1: 'atv a',
    todo2: 'feed myself'
}

localStorage.setItem('todo',todoList);   //transforma o array em string :/

const retrieved = localStorage.getItem("todo");
console.log(retrieved, typeof retrieved);


// JSON.stringify - biblioteca que converte os dados.
localStorage.setItem('todos', JSON.stringify(todoList)); //converte
const transformado = JSON.parse(localStorage.getItem('todos')); 
//converte os dados e coloca num array/objeto
console.log(transformado, typeof transformado);

