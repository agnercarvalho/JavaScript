for ( let i = 0; i<=40; i++){
    console.log(i);
}

const array = ["A", "G", "N", "E", "R"];

for(i=0; i< array.length; i++){
    console.log(array[i]);
}

for (let name of array){
    console.log(name);
}

for (let name of array){
    console.log(array.indexOf(name));
}

// Usar somente em arrays - mais lento e menos efetivo

array.forEach(function(letra, index){
    console.log(letra, index)
})

const user = {
    name: "Agner",
    age: 31,
    married: false,
    bank: 'pobre'
}

for (let key in user){  //retorna as chaves
    console.log(key);
}

for (let key in user){   //retorna os valores 
    console.log(user[key]);
}



