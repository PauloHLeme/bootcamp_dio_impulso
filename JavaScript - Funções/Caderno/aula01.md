# Tipos de Função

## Estrutura

```
function nome(parametros){
    //instruções

    return (retorno)
}
```

Variáveis criadas dentro de uma função só podem ser acessadas dentro da função

## Return

Quando código acessar o `return` dentro do código, ele vai devolver o resultado que definirmos dentro dele para poder ser utilizado.

Vale lembrar também que ao utilizarmos o return, o código da função para de ser executado, pois estamos dizendo pra ele que já está sendo retornado o que desejamos.

## Função anônima

```
const soma = function(a,b){
    return a + b;
}
```

Funções anônimas são funções simples criadas para executar uma atividade. Variáveis podem armazenar funções, e se chamarmos a variável, ela vai executar a função armazenada dentro dela.


## Função autoinvocável

IIFE(Immediately Invoked Function Expression), ela é uma função anônima, que chama a si mesma.

Para criarmos uma função deste tipo, devemos criar a função dentro de parênteses, e logo após o parênteses de fechamento, abrir e fechar parênteses, como no exemplo abaixo:

```
(
    function() {
        let name = "Digital Innovation One"
        return name
    }
)();
```

```
(
    function (a, b) {
        return a + b;
    }
)(1,2);
```

```
const soma3 = (
    function() {
        return a + b;
    }
)(1,2);

console.log (soma3)
```

## Callbacks

Uma função *Callback* nada mais é que uma função que é passada como argumento para uma outra, ou seja, é uma função que será chamada por outra função.

```
const calc  = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function (num1, num2){
    return num1 + num2;
}

const sub = function (num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);     //-1
console.log(resultSoma);    // 3
```

