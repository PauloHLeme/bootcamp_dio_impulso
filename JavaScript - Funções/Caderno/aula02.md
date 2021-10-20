# Parâmetros

## Valores padrão

Podemos criar valores padrões para os parâmetros recebidos pelas nossas funções. Para tanto, basta colocarmos na frente do parâmetro o sinal de `=`, seguido do valor que desejamos que seja padrão:

```
function exponencial (array, num = 1){

}
```

## Objeto "Arguments"

O `arguments` é um objeto criado pela função e presente em todas as funções.

Caso precisemos saber de um valor específico passado em uma função que não sabemos quantos parâmetros vai receber, podemos utilizar o `arguments` para que ele consiga acessar tal valor. Vamos ver um exemplo:

```
function findMax(){
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++){
        if (arguments [i] > max){
            max = arguments[i];
        }
    }

    return max;
}
```

No caso acima, quando passarmos vários valores para a função, como `findMax(1, 2, 3, 6, 90, 1)`, ela vai nos retornar o valor 90, pois vai analizar todos os argumentos enviados. Perceba, nós não enviamos um array, e sim uma série de valores para serem testados 1 por 1. O Arguments foi responsável por transformar isso m algo parecido com um array e fazer a conta.

## Arrays

### Spread

Uma forma de lidar separadamente com os elementos.

Para fazermos o spread de um Array logo que o chamamos dentro de uma função, basta adicionarmos reticências (...) antes do array. Dessa forma, o javascript vai chamar ele ativando o spread e separando os valores em elementos independentes.

```
function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1, 2, 3]

console.log (sum(...numbers));
```

### Rest

Combina os argumentos em um Array.

De forma similar, basta utilizarmos as reticências (...) para utilizarmos essa propriedade. Entretanto, ele é ativado ao utilizarmos as reticências na criação da função, onde declaramos os parâmetros.

```
function confereTamanho(...args) {
    console.log (args.lenght)
}

confereTamanho ()           //0
confereTamanho (1, 2)       //2
confereTamanho (3, 4, 5)    //3
```

## Objetos

### Destructuring

Entre as chaves ({}), podemos filtrar apenas os dados que nos interessam em um objeto.

```
const user = {
    id:42,
    displayName:"jdoe",
    fullName: {
        firstName: 'John',
        LastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
};

userId(user);           // 42
getFullName(user);      // John Doe
```
