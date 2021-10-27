# Reduce

## O que é

O reduce é utilizado para tratar todos os valores de um array, realizando a operação desejada com ele e retornando um valor único para nós. Esse valor único pode ser um array, uma string, um number ou qualquer outro tipo de dado que a operação desejada retornar.

De certa forma, ele irá reduzir a lista de valores em um resultado final, que foi obtido se trabalhando esses valores.

## Sintaxe

```JS
array.reduce(callbackFn, initialValue)
```

Callback: função a ser executada a partir do acumulador

initialValue(opcional): valor sobre o qual o retorno final irá atuar

```JS
const callbackFn = function(accumulator, currentValue, index, array){
    //do something
}

array.reduce(callbackFn, initialValue)
```

accumulator/prevValue: acumulador de todas as chamadas de callbackFn

currentValue: elemento atual sendo acessado pela função
