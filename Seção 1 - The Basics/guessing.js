function guessingGame(){
    let randomNumber = Math.random()*10;
    console.log(randomNumber);
    let fixedNumber = Math.floor(randomNumber);
    //let fixedNumber = Math.floor(Math.random()*10); mesma coisa com uma variavel só
    console.log(fixedNumber);

    let guess;
    do{
        guess = prompt("Insira um número entre 0 e 10");
        console.log(guess, fixedNumber);
        
        if(fixedNumber<guess){
            console.log("Número acima do valor.")
        }else if(fixedNumber>guess){
            console.log("Número abaixo do valor.")
        }
    }while(guess != fixedNumber){
        console.log("Você acertou!");
    }
}

guessingGame();