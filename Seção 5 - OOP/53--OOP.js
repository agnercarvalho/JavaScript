// **CONSTRUCTION FUNCTIONS ** - funções que constroem objetos

//function Todo(name,completed){   // Geralmente constructions function são criadas em UpperCase
//    this.name = name;
//    this.completed = completed;
//}

//const todo = new Todo("Estudar JS",true);
//console.log(todo);
// NEW cria um novo objeto e seta o this para este objeto criado.


// ** PROTÓTIPOS **
/* São usados para que os códigos não sejam repetidos em cada instância dos objetos */

function Todo(name,completed){ 
   this.name = name;
   this.completed = completed;
}

Todo.prototype.getTodoName =  function(){
       console.log(this.name);
   };

const todo = new Todo("Estudar JS",true);

console.log(todo);      // Acessa o objeto
todo.getTodoName();     // Acessa a função criada dentro do objeto - protótipo

const vetor = new Array(1,2,3,4,5);
console.log(vetor);