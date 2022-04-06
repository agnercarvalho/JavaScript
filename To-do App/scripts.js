// **** Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterEvent = document.querySelector(".filter-todo");
const aviso = document.querySelector(".aviso");
//* Shift + Alt + seta pra baixo duplica das linhas do código


// **** EventListeners
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);  //Colocar evento no pai para identificar em qual filho está sendo clicado
filterEvent.addEventListener("click", filterTodo);

// **** Functions
function addTodo(event){

    //Previnir comportamento de atualizar página
    event.preventDefault();
    
    if(todoInput.value != ""){

        // Criando a DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        // Criar LI
        const newTodo = document.createElement("li");
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value;
            
        // Append newTodo na DIV
        todoDiv.appendChild(newTodo);

        // Adicionar todo in local storage
        saveLocalTodos(todoInput.value);
            
            // Completed button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
            completedButton.classList.add("completed-button");
            todoDiv.appendChild(completedButton);

            // Trash button
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            trashButton.classList.add("trash-button");
            todoDiv.appendChild(trashButton);

        //Append no UL
        todoList.appendChild(todoDiv);
        aviso.classList.remove("mostrar-aviso");
    }else{
        aviso.classList.add("mostrar-aviso");
    };

    //Cleaning
    todoInput.value = "";  
}

function deleteCheck(event){
    // console.log(event.target);
    const item = event.target;

    // Deletando
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;        // Pega o elemento pai de item, ou seja o pai do button
        todo.classList.add("fall");     //adiciona classe da animação
        removeLocalTodos(todo);
        todo.addEventListener("transitionend",function (){    //espera a animação de todo (pai do button) acabar
            todo.remove();    //remove o pai do button
        });
    }
    // Check mark
    if(item.classList[0] === 'completed-button'){
        const todo = item.parentElement;        // Pega o elemento pai de item, ou seja o pai do button
        todo.classList.toggle("completed");
    }
}

function filterTodo(event){
    const todo = document.querySelectorAll(".todo");

    // console.log(event);
    // console.log(todo);

    todo.forEach( function(todo,i){    

        switch (event.target.value) {
            case "all":
              todo.style.display = "flex";
              break;
            case "completed":
              if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
              } else {
                todo.style.display = "none";
              }
              break;
            case "uncompleted":
              if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
              } else {
                todo.style.display = "none";
              }
          }
    });

}

function saveLocalTodos(todo){
    // CHECK
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);   //colocar o todo = todoInput.value dentro de todos
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    // CHECK
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        // Criando a DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        // Criar LI
        const newTodo = document.createElement("li");
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
            
        // Append newTodo na DIV
        todoDiv.appendChild(newTodo);
            
            // Completed button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
            completedButton.classList.add("completed-button");
            todoDiv.appendChild(completedButton);

            // Trash button
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            trashButton.classList.add("trash-button");
            todoDiv.appendChild(trashButton);

        //Append no UL
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(divTodo){   //recebe a div todo
    // CHECK
    let todos;
    console.log(divTodo);

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = divTodo.children[0].innerText;   //pegando o texto de dentro de li que ta dentro da div
    console.log(divTodo.children[0].innerText);
    todos.splice(todos.indexOf(todoIndex), 1);
    // splice remove um elemento de um conjunto, ele remove X elementos a partir da posição Y .. logo splice(Y,X)
    localStorage.setItem("todos", JSON.stringify(todos));
}