document.title = "we change it!";

//         USANDO NODELIST
const items = document.getElementsByClassName("item"); /*  só retorna nodes*/

//        USANDO HTML COLLECTIONS
const nodeItems = document.querySelectorAll(".item"); /* retorna tipos diferentes.. texto, comentários*/

console.log(items, nodeItems);

const nodes= document.querySelector('#todolist');
console.log(nodes.childNodes); /*retorna todos os nodes dentro de todo list*/

console.log(nodes.children); /* acessa somente os nodes */

for(item of nodeItems){
    console.log(nodeItems);
}

/*outros meios de conseguir os nodes 
NODELIST - pode usar forEach  - método array
HTML Collections - não pode, TEM QUE USASR - OF -
*/

nodeItems.forEach(function(item){
    console.log(item);
});

/* Quando voce seleciona pelos NODELIST (byID, byClassName) ele faz o update automático */

const collectionItems = document.getElementsByClassName("item");
console.log(collectionItems);

const newItem = document.createElement('li');  // cria elemento com a tag HTML
newItem.classList.add("item");  //adiciona a classe item ao elemento criado
newItem.innerText = "Item 3";  //coloca texto dentro da tag

const parentUl = document.getElementById("todolist");

parentUl.appendChild(newItem); //adiciona um child dentro do parent

//update o numero de itens

const todoNr = document.getElementsByClassName("todoNr")[0]; //Pega o primeiro Node da lista retornada pelo getElement
todoNr.innerText = collectionItems.length;


// ----------------------------------------------
//   Agora com Query Selector - Retorna HTML Collections      

const collectionItems2 = document.querySelectorAll(".item");
const parentUl2 = document.querySelector("#todolist");
const todoNr2 = document.querySelector(".todoNr");

const newItem2 = document.createElement('li');  //tag HTML
newItem2.classList.add("item");
newItem2.innerText = "Item 4";  //texto dentro da tag
parentUl2.appendChild(newItem2); //adiciona um child dentro do parent
console.log(collectionItems2);  //item criado nao aparece nessa lista, o query não atualiza a HTML Collection
// Não atualiza dinamicamente o conteúdo da página mas o append funciona


// Método para fazer o Query atualizar a HTML Collection >>

const parentUl3 = document.querySelector("#todolist");  //pega o pai
const items2 = parentUl3.children;   //transforma os parents em HTML Collection
console.log(items2);