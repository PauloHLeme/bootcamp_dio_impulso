# Filter

## O que é

O filtro passa o array por uma condição, um teste, e retorna um novo array com os valores que passaram nesse teste.

## Sintaxe

```JS
array.filter(callback, thisArg)
```

Calback: funcção a ser executada em cada elemento

thisArg(opcional: valor de this dentro da função callback
)

```JS
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']

frutas.filter((fruta) => fruta.includes('maçã'))
//retorno ['maçã fuji', 'maçã verde']
```
