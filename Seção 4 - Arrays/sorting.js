// ** SORT **

const items = ["Caneta", "Camisa", "Lápis", "Borracha"];
const preco = [9, 65, 2, 3];

preco.sort(function(a,b){
    return a - b; //ordem crescente
});
console.log(preco);

/*  Se o resultado for positivo B vai ficar antes de A
    Se for negativo A vai ficar antes de B,
    Se for 0 nada vai mudar */

preco.sort(function(a,b){
    return b - a; //ordem decrescente
});
console.log(preco);

// Usando arrow function
preco.sort((a,b) => a - b);
console.log(preco);

// Usando sort referencia o array original (altera o array original)

const objetos = [
    {nome: 'mesa', tamanho: 3},
    {nome: 'mouse', tamanho: 0.2},
    {nome: 'caneca', tamanho: 0.13},
    {nome: 'teclado', tamanho: 0.5},
    {nome: 'cadeira', tamanho: 1.2}
];

objetos.sort((a,b) => a.tamanho - b.tamanho); // organiza objetos por ordem de tamanho (crescente)
console.log(objetos);


// ** OPERADOR SPREAD em arrays**

// Criando cópias
const descPreco = [...preco];
descPreco.sort((a,b) => a - b);
console.log(descPreco);

const nome = 'Agner';
const nomes = ['Agner'];
const outrosNomes = ['Lukian'];

const letras = [...nome];  //Separa cada célula de um array
console.log(letras);

// Concat
const todosOsNomes = nomes.concat(outrosNomes);
console.log(todosOsNomes);

const juncao = [...nomes, ...outrosNomes, "adicionar mais se eu quiser"];  //modo simples de fazer
console.log(juncao);