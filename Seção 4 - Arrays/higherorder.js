/* funções de ordem maior são funções que recebem funções como parâmetro

Exemplos:
button.addEventListener('click', function{
    console.log("click");
});

ou 

videos.forEach(function(video){
    console.log("run");
});

Callback são as funções que são usadas como parâmetro. */

// ** MAP **

const falas = [
    "Olá",
    "Tudo bem?",
    "Vou bem e você?",
    "Estou bem também",
    "Que bom que está bem!"
];

// Vai executar o código para cada um dos itens do array

const newFalas = falas.map(function(fala){
    return fala.toUpperCase();
});

// MAP sempre tenta retornar algo, se não houver um return, ele vai retornar um array de undefined. Ele também cria uma cópia do array, eliminando o problema de referenciação. Mais usados para criar modificações em arrays.

console.log(falas);
console.log(newFalas);


// ** FIND **

const procurarFala = falas.find(function(fala){
    return fala.includes("você");
});
console.log(procurarFala);
//Só retorna o primeiro valor encontrado.


// ** FILTER **

const dialogosLongos = falas.filter(function(fala){
    return fala.length > 5;
});
console.log(dialogosLongos);
// Só retorna diálogos que tem mais que 5 caracteres.


const objetos = [
    {nome: 'mesa', tamanho: 3},
    {nome: 'mouse', tamanho: 0.2},
    {nome: 'caneca', tamanho: 0.13},
    {nome: 'teclado', tamanho: 0.5},
    {nome: 'cadeira', tamanho: 1.2}
];


// ** SOME E EVERY **    CHECAGEM - COMPARAÇÃO

const checkTamanho = objetos.every(function(objeto){
    return objeto.tamanho > 1;  //Checa se todos os objetos são maiores que 1
});
console.log(checkTamanho);

const someTamanho = objetos.some(function(objeto){
    return objeto.tamanho > 1;  //Checa se tem algum maior do que 1
});
console.log(someTamanho);

// ** Usando condições com o Return! ** Operador "Turnário"
const objetosGrandes = objetos.map(function(objeto){
    return objeto.tamanho > 1 ? objeto : "pequeno";
    // If tamanho de objeto > 1 retorna o proprio objeto, else retorna "pequeno"
});
console.log(objetosGrandes);


// ** Modos de declarar funções ** 
/*
function nome(){
    ...
}
nome();

const outroNome = function(){
    ...
};
outroNome();
*/

// ** FUNÇÃO ARROW **

/*  const objetosGrandes = objetos.map(function(objeto){
        return objeto.tamanho > 1 ? objeto : "pequeno";
    });
    console.log(objetosGrandes);
*/

const objetosPequenos = objetos.map((objeto) => { //Pode tirar o () se for um argumento só
    return objeto.tamanho < 1 ? objeto : "grande";
});
console.log(objetosPequenos);

/*  const objetosPequenos = objetos.map((objeto) => (objeto.tamanho < 1 ? objeto : "grande")); //tudo depois da => é return
console.log(objetosPequenos);

button.addEventListever('click',event => { code });
*/

// Revisão de Arrays 
//array.push() coloca um valor no final
//.pop()  tira o ultimo
//.shift()  tira o primeiro
//.unshift("bb")  coloca um valor no primeiro
//.length()  retorna a quanatidade de elementos
//.indexOf("aa")  retorna a posição de aa
//array.concat(array)  une os arrays