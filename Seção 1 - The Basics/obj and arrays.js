const user = {
    name: "Agner",
    age: 31,
    married: false,
    greet: function(){
        console.log("Hello there!");
   }
};

//name é a chave
//name: "Agner" é a propriedade
//"Agner" é o valor

console.log(user.name);
user.greet();

const listUsers = ['Ag Dev', 'Luki', 'Nome'];

console.log(listUsers[0]);

listUsers.pop();

console.log(listUsers[1]);

listUsers.push('Novo');

console.log(listUsers[2]);

console.log(listUsers.indexOf("Novo"));

// Arrays 
//array.push() coloca um valor no final
//.pop()  tira o ultimo
//.shift()  tira o primeiro
//.unshift("bb")  coloca um valor no primeiro
//.length()  retorna a quanatidade de elementos
//.indexOf("aa")  retorna a posição de aa