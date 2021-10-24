# Sets

## Estrutura

Sets são estruturas que armazenam apenas valores únicos, que não se repetem nunca.

```JS
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray);
//mySet será [1, 2, 3, 4, 5, 6, 7, 8]
```

## Métodos

```JS
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
//false

mySet.delete(5);
```

## Set vs Array

* Possui valores únicos

* Em vez da propriedade length, consulta-se o número de registros pela propriedade size

* Não possui métodos map, filter, reduce, etc
