# Tipos

## Estruturas de Dados

O JavaScript é uma linguagem de tipagem dinâmica e fraca, ou seja, não precisamos declarar de início o tipo da variável e podemos inclusive modificar o tipo do dado conforme a necessidade do código.

### Dados Primitivos e Compostos

Dados como: `numbers`, `strings`, `boolean`, `null` e `undefined` são tipos primitivos, ou seja, são dados simples, que não possuem métodos internos.

Já objetos e arrays são tipos não primitivos, ou compostos. Eles possuem métodos internos que iremos entender mais adiante.

![Tipos em JavaScript](https://simplesnippets.tech/wp-content/uploads/2018/10/variables-and-datatypes-in-JavaScript-featured-image.jpg)


## Strings

São textos, palavras, frases, ou tudo o que quisermos passar por escrito.

São declaradas entre aspas ou crases.

```
const DIO = 'Digital Innovation One';

let firstName = 'João';
let lastName = "Luiz";

let fullName = `Nome completo: ${firstName} ${lastname}`
```

## Numbers

O tipo número aceita tanto números inteiros quanto decimais. Eles são declarados apenas digitando o número, sem aspas simples, duplas ou qualquer outro sinal.

```
let num = 100

const pi = 3.14
```

## Booleans

É um tipo resumido a um valor `true` ou `false`, ou seja, se é verdadeiro ou falso.

Sempre que fizermos uma comparação, por exemplo, teremos como retorno um valor booleano.

## Arrays

Arrays, ou vetores, são listas iteráveis de elementos. É uma única variável, mas que contém uma lista de valores dentro dela. Nessa lista, cada valor recebe uma chave de identificação, que se inicia em *0* e cresce de 1 em 1.

## Objetos

Objetos são parecidos com os Arrays, mas permite a inserção de dados de mais de um tipo, e você vai criar o nome da chave e o valor que ela vai receber.

```
let person = {
    name: 'John',
    age: 20
};
```

No exemplo acima, as chaves são `name` e `age`, enquanto os valores são `John` e `20`.

## Empty, Undefined e Null

Empty: Uma Variável que foi declarada, mas recebeu um valor vazio. Valores vazios são por exemplo uma variável do tipo number que foi declarada com 0, uma string declarada sem nada `""`...

Null: Uma variável declarada, mas que você propositalmente não inicializa, atribui um valor `null`.

Undefined: Um valor inexistente, que foi declarado mas não inicializado.

Temos que ficar atento porque nenhum desses três valores são realmente `false`. Então se perguntarmos se um valor null, undefined ou empty é igual a falso, a resposta será negativa, mas se perguntarmos se é verdadeiro, também será negativo.
