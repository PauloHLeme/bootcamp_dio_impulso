//funções internas da String
function isPalindrome01(string){

    //validação
    if(!string) return console.log("Escreva uma palavra");

    const word = removeSpace(lower(string));
    let inverse = word.split("").reverse().join("");

    return console.log((word === inverse) ? "É um palíndromo" : "Não é um palíndromo");
}

//invertendo por Loop de Decremento, tratando a string como um array
function isPalindrome02(string) {

    //validação
    if(!string) return console.log("Escreva uma palavra");

    const word = removeSpace(lower(string));

    let newString = "";

    for (let i = word.length -1; i >= 0 ; i--){
        newString += word[i];
    }

    return console.log((word === newString) ? "É um palíndromo" : "Não é um palíndromo");
}

function isPalindrome03(string) {
    //validação
    if(!string) return console.log("Escreva uma palavra");

    let word = removeSpace(lower(string));


    for (let i = 0; i < word.length / 2; i++) {
        if(word[i] !== word[word.length -1 -i]) {
            return console.log ("Não um Palíndromo");
        }
    }

    return console.log("É um Palíndromo");
}

//transformar tudo em minúscula
function lower(string){
    const lowerCase = string.toLowerCase();

    return lowerCase;
}

//remover espaços da frase
function removeSpace(string){
    return string.replace(/\s+/g, "");
}


isPalindrome03("amo");
isPalindrome03("");
isPalindrome03("ama");
isPalindrome03("amor a roma");
isPalindrome03("Amor a Roma");
isPalindrome03("Socorram me subi no onibus em Marrocos");
