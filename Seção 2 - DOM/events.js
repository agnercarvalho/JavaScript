const botao = document.querySelector('#adicionar');

const todolist = document.querySelector("#todolist");
const items = todolist.children;

const todoNr = document.querySelector(".todoNr b"); //pega a tag B dentro de todoNr, igual no CSS
//tipos de eventos: click, scroll, resize the browser

const mainTitle = document.querySelector(".mainTitle");

//      Adicionar um evento a um elemento

// botao.addEventListener("click", function() {
//     console.log("Item adicionado.");
//     const newItem = document.createElement("li");
//     newItem.classList.add("item");
//     newItem.innerText = `Item ${items.length+1}`;
//     todolist.appendChild(newItem);
//     todoNr.innerText = items.length;
// });
// addEventListener recebe 2 parametros: o tipo de evento e a função que ele vai executar. Se a função só for ser executada uma vez, pode deixar sem nome tipo a function() acima. Nesse caso, não pode usar parenteses no parametro do Event Listener

// todoNr.innerText = items.length;  //não atualiza quando adiciona o item se ele ficar fora do eventListener

// botao.addEventListener("click", function(event){  //event: acesso ao evento  
//     // console.log(mainTitle);
//     // mainTitle.style.color="red";
//     // mainTitle.style.fontSize="50px";
//     // mainTitle.classList.add("color"); adiciona classe ao objeto
//     mainTitle.classList.toggle("color"); // toggle de classe no objeto
//     console.log(event);
// });

botao.addEventListener("keydown", function(event){  //event: acesso ao evento  
    if(event.keyCode === 13){
        mainTitle.classList.toggle("color"); // toggle de classe no objeto
        console.log(event);
    }
}); 