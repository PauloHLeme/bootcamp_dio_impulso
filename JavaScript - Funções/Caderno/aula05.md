# Arrow Functions

## Sintaxe

Escrever:

```
const helloWorld = function(){
    return "Hello World";
};
```

É igual a escrever:

```
const helloWorld = () => {
    return "Hello World";
};
```

Que é o mesmo que escrever:

```
const helloWorld = () => "Hello World";
```

Funções muito pequenas, com apenas uma linha de código, que serão aninhados dentro de uma constante ou variável podem ser escritas como uma Arrow Function. Ela vai funcionar como uma função comum, mas a sua escrita será bem mais enxuta e irá manter o código extremamente limpo!

* Caso exista apenas uma linha, pode dispensar as cheaves e o return.

```
const soma = (a, b) => a + b;
```

* Caso exista apenas um parâmetro, pode dispensar os parênteses.

```
const valor = a => a;
```

## Restrições

> Atenção! Diferente de uma função tradicional, uma Arrow Function não é capaz de fazer Hoisting!

* "this" sempre será o objeto global, não conseguindo utilizar os métodos call, apply e bind, por exemplo

* Não existe o objeto arguments

* O construtor (new MeuObjeto()) não pode ser utizado
