# Loops

As estruturas de loop são muito utilizadas na programação, são algumas das declarações mais utilizadas no dia a dia do desenvolvimento.

## If/else

```
if(num < 0) {
    resultado = false;
} else {
    resultado = true;
}
```

## Switch

Quando temos várias verificações, podemos substituir o uso de vários if/else pelo comando switch.

```
switch(id){
    case 1:
        return "cão";
    case 2:
        return "gato";
    case 3:
        return "pássaro";
    default:
        return "peixe";
}
```

## For

O for é um comando que utilizamos dentro de elementos iteráveis, isso é, tipos de dados que possuam várias entradas de valor, como no caso de arrays e strings, por exemplo.

```
for (let i = 0; i < arr.length; i++){
    multiplicados.push(arr[i] * 2);
}
```

## For/in

Loop entre propriedades enumeráveis de um objeto.

```
function forInExemplo(obj){
    for (prop in obj){
        console.log(ojb[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: 20,
    cidade: "Salvador
}

forInExemplo(meuObjeto);
//João
//20
//Salvador
```

## For/of

Loop entre estruturas iteráveis (arrays, strings)

```
for (letra of palavra){
    console.log(letra)
}
```

## While

Loop que executa uma instrução até que ela se torne falsa

```
let num = 0

while (num <= 5){
    console.log (num);
    num++;
}
```

## Do While

Executa até que a condição se torne falsa, mas a primeira execução SEMPRE ocorre.

```
let num = 6

do {
    console.log(num);
    num++;
}while (num <=5)
```

