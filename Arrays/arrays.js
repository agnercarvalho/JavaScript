const names = ["ag", "nd", "r"];

console.log(names);

names[1] = "ne";

console.log(names);

// Reatribuir valores em um array, mesmo sendo CONST, não retorna erro (funciona com objetos tbm)

names.push("!"); // adiciona um valor no final do array, mesmo sendo const não dá erro

// Se tentar declarar outro array/obj com mesmo nome vai dar erro
// names = ["faca", "queijo"];

const newNames = names;

newNames.push("Novo item");

console.log(names);
console.log(newNames);

// Mesmo quando você copia arrays e adiciona algum valor no que foi criado, o novo valor é atribuido também ao array que foi referenciado