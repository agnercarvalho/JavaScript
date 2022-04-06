// Funções de Ordem Maior são funções que usam funções como parâmetro, como pro exemplo: forEach 

const coisas = ["lâmpada","trava","porta","mouse"];

coisas.forEach(function(thing){
    console.log(thing);
});

// A função forEach vai executar a função dentro de seu parâmetro para cada filho(valor) do array coisas. A variável thing vai assumir o valor do filho da vez, ou seja, assumirá o valor "lâmpada", depois "trava" ...

// Outro Exemplo

function repeater(fn){
    fn();
    fn();
    fn();    
}

function sayHello(){
    console.log("Hello");
}

//Outro modo de escrever
repeater(function(){
    console.log("Hello");
});

repeater(sayHello);

// As funções de CALLBACK são as funções inseridas dentro de outras, ou funções que esperam outras coisas acontecerem. Por exemplo:

// button.addEventListener("click", function(){...}); a função só será executada depois do click, ela espera alguma coisa acontecer para ela ser chamada 