const text = "banana";

switch(text){
    case "banana":
        console.log("Wooow, banana!");
        break;
    case "apple":
        console.log("Not a banana");
        break;
}


//Example
let userImput = prompt("Escolha uma fruta:").toLowerCase(); //poe em caixa baixa


switch(userImput){
    case "kiwi":
        console.log("Kiwi is really fine!");
        break;
    default:
        console.log("It's not an option.");
        break;
}