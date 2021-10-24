# Map

## Estrutura

O Map é uma estrutura com uma coleção de arrays no formato [chave, valor]

Pode ser iterado por um loop `for...of`

```JS
const myMap = new Map()
```

## Métodos

```JS
const myMap = new Map()

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get('apple');
// "fruit"

myMap.delete("apple");

myMap.get("apple");
// undefined
```

## Map vs Objeto

* Maps podem ter chaves de  qualquer tipo, objeto tem chaves em string

* Maps possuem a propriedade lenght

* Maps são mais fáceis de iterar

* Utilizado quando o valor das chaves é desconhecido

* Os valores tem o mesmo tipo
