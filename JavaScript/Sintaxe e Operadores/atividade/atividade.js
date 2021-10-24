
// Compara os números e cria a primeira sequencia
function sentenceOne(x,y){

    const checkEquals = (x === y) ? "são iguais": "não são iguais";

    return `Os números ${x} e ${y} ${checkEquals}.`;
}

// Faz a soma, verifica se é maior ou menor que 10 e 20 e cria a segunda sentença
function sentenceTwo(x,y){
    const sum = x + y;
    let compare10 = 'menor que';
    let compare20 = 'menor que';

    if(sum > 20){
        compare20 = 'maior que';
    } else if(sum === 20){
        compare20 = 'igual a'
    }

    if (sum >10){
        compare10 = 'maior que';
    } else if(sum === 10){
        compare10 = 'igual a';
    }

    return `Sua soma é ${sum}, que é ${compare10} 10 e ${compare20} 20.`

}

//Une as duas sentenças na frase final
function sentenceFinal(x,y){

    /*
    Faz a verificação, conferindo se foram digitados dois valores e se os dois são do tipo número.
        Para o x, verifica através do método isNaN, conferindo se é ele não é um número
        Para o y, utiliza o atributo typeof, para verificar o tipo da variável
    */
    if (isNaN(x) || typeof y != 'number') return console.log('Defina dois números. \n');

    return console.log(`${sentenceOne(x,y)} ${sentenceTwo(x,y)} \n`);
}

//Teste com diferentes entradas, para simbolizar as mais diversas possibilidades de saída de código
sentenceFinal();
sentenceFinal('x','x');
sentenceFinal(0,'0');
sentenceFinal(0);
sentenceFinal(0,0);
sentenceFinal('x','x');
sentenceFinal(4,5);
sentenceFinal(5,5);
sentenceFinal(5.1,5);
sentenceFinal(14,5);
sentenceFinal(15,5);
sentenceFinal(15,15);
