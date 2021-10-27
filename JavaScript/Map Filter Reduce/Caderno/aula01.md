# Map

## O que é

Em matemática, map é uma operação que pega um conjunto e transforma em outro através de uma função.

Se temos o conjunto 1, 2, 3 e temos a função y = 2x, criaremos uma nova função com os valroes 2, 4, 6.

A função criou um novo conjunto, na mesma ordem anterior, e manteve o conjunto original.

Em JS ocorre a mesma coisa. Ao fazermos um map, alteramos de forma similar todos os itens de um array, criando um novo array auxiliar e mantendo a ordem do array anterior.

## Sintaxe

```JS
array.map(callback, thisArg)
```

callback: a função a ser executada em cada elemento

thisArg(opcional): valor de this dentro da função de callback

## Map vs forEach

O map retorna o array, o forEach não

```JS
const array = [1, 2, 3, 4, 5]

array.map((item) => item * 2);
//retorno [2, 4, 6, 8, 10]

array.forEach((item) => item *2);
//retorno undefined
```
