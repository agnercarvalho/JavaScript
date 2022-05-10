/* CallStack é a pilha de funções, que é iniciada sempre pelo Global Execution

global(){
    function 1(){
        function 2(){
            codes
        } 
    }
}

Ou seja, a execução também acontece em escopos. O código é lido linha a linha e vai Stackando (empilhando) os escopos de execução.

Global -> Função 1 -> Função 2

Toda vez que uma função é invocada um contexto de execução é criado e quando ele termina ele é eliminado e o anterior é continuado.
*/


// ** THIS **

/* this é um ponteiro que sempre aponta para o OBJETO que ele está inserido. */

console.log(this);

/*const user = {
    name: 'Agner',
    funcao: function(){
        console.log("hello!");
    }
};*/

const user = {
    name: 'Agner',
    funcao(){
        console.log(this);  //aponta para o objeto que ele está!
        console.log(this.name);
    }
};
user.funcao();

// Colocar um método (função) dentro de um objeto:
const admin = {
    name: 'admin'
}

function sayHello(){
    console.log("Hello");
};
admin.hello = sayHello;  // adiciona a funcao ao objeto, e passa a ser um método daquele objeto.
admin.hello();

// * USO COM DOM
const items = document.querySelectorAll("li");

items.forEach(item => {
    item.addEventListener('click', function(){    //Não posso usar arrow function por que se não ele vai apontar para do window, eu tenho que abrir uma função nova.
        console.log(this);
    });
});

/* Cuidado ao usar funções dentro de funções!!! Pois quando uma função é invocada, um novo contexto de execução é criado e com isso o ponteiro THIS também é alterado. Para que o valor de THIS não seja perdido, é comum declarar uma função com *let self = this;* para que o uso seja feito por todas as funções, não importando seu escopo. O mesmo não acontece com as arrow functions, pois ela não reseta o THIS */

/*const usuario = {
    nome: 'Agner',
    linguagens: ['html', 'css', 'js', 'php'],
    greet(){
        let self = this;
        console.log(`Olá ${self.nome}!`);
        const qtdLinguagens = function(){
            console.log(`Você já aprendeu ${self.linguagens.length} linguagens.`);
        }
        qtdLinguagens();
    }
}
usuario.greet(); */

const usuario = {
    nome: 'Agner',
    linguagens: ['html', 'css', 'js', 'php'],
    greet(){
        console.log(`Olá ${this.nome}!`);
        const qtdLinguagens = () => {
            console.log(`Você já aprendeu ${this.linguagens.length} linguagens.`);
        }
        qtdLinguagens();
    }
}
usuario.greet();

// FUNÇÕES SÃO OBJETOS ESPECIAIS QUE TEM ACESSOS AOS MÉTODOS QUE SÃO BIND, CALL E APPLY

const person = {
    primeiroNome: 'Lukian',
    ultimoNome: 'Origgi',
    getName(){
        console.log(this.primeiroNome + ' ' + this.ultimoNome);
    }
}
person.getName();

function registerPerson(pais,idioma){
    this.getName();
    console.log(`Meu país é: ${pais} e meu idioma é: ${idioma}`);
}

// BIND (vincular) - quando usado ele passa a referência (this) do objeto que é passado como parâmetro
const register = registerPerson.bind(person);  // variável recebe a função e o bind passa o objeto, logo, quando a função registerPerson for invocada, a referência/ponteiro (this), vai ser passado para dentro da função invocada. Bind também é usado para atribuir a uma variável.
register("Brasil","pt-br");

// CALL (chamar) - funciona semelhante ao BIND, porém não atribui (guarda) o valor em uma variável, CALL somente invoca e referencia o objeto.
registerPerson.call(person,"Brasil","pt-br");  
/* registerPerson.call(person, parâmetros para serem passados para a outra função); O primeiro parâmetro sempre deve ser o objeto, os demais são os argumentos que serão usados na função. Neste exemplo não tem. */

// APPLY (aplicar) - funciona da mesma forma de CALL porém os parâmetros são passados na forma de array.
registerPerson.apply(person,["Brasil","pt-br"]);

// LEMBRAR SEMPRE DE PASSAR PARÂMETROS COM " " POR QUE SENÃO VAI BUGAR O CÓGIDO SEM DAR MENSAGEM DE ERRO!!!!