const botao = document.querySelector('#adicionar');
const todolist = document.querySelector("#todolist");
const items = todolist.children;
const todoNr = document.querySelector(".todoNr b"); 
const mainTitle = document.querySelector(".mainTitle");

const nameInput = document.querySelector(".input");

botao.addEventListener("click", function(e) {
    e.preventDefault();  // cancela o comportamento padrão do browser, nesse caso, ao apertar o botao do formulário a página não atualizará!!!

    // console.log("Item adicionado.");
    const newItem = document.createElement("li");
    // adicionando classe
    newItem.classList.add("item");
    // adicionando texto ao elemento
    newItem.innerText = nameInput.value; //pega o valor digitado no form
    // fazendo o append - adicionando elemento ao pai
    todolist.appendChild(newItem);
    todoNr.innerText = items.length;
    // Deletar o valor do Input
    nameInput.value = "";
    // Criar o elemento e adicionar o eventListener
    newItem.addEventListener("click",deleteItem);

    console.log(nameInput);
});

function deleteItem(event){
        console.log("delete", event);
        event.stopPropagation();  //previne o Event Bubbling
        event.target.remove();    //remove o elemento
};

todolist.addEventListener("click", function(){
    todolist.classList.toggle("fade");
});

//Event bubbling: quando vc clica em eventListeners sobreprostos, ambos executam, logo vc tem que dar um stop (de dentro pra fora no escopo)