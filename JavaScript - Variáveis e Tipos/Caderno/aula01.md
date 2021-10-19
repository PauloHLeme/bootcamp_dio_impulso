# Atribuindo Valores

## Boas práticas em nomeação de variáveis

Temos alguns termos que utilizamos para denominar a forma como nomeamos as variáveis. Aqui abaixo veremos alguns deles:

Case Type | Exemplo | Descrição
:--- | :--- | :---
Original Variable as String | some awesome var | Nome da variável por extenso, não é comumente utilizado pois a maioria das linguagens não aceita espaçamento no nome da variável
Camel Case | `someAwesomeVar` | Todas as palavras do nome da variável terão suas primeiras letras em maíusculo, COM EXCESSÃO da primeira. Padrão mais comum em desenvolvimento JavaScript
Snake Case | `some_awesome_var` | Todas as letras em minúsculo, com palavras separadas por *underline* (_)
Kebab Case | `some-awesome-var` | Todas as letras em minúsculo, com palavras separadas por hífen (-)
Pascal Case | `SomeAwesomeVar` | Parecido com o Camel Case, mas a primeira letra de TODAS AS PALAVRAS serão escritas em maíusculo, e o restante em  minúsculo
Upper Case Snake Case | `SOME_AWESOME_VAR` | Como na Snake Case, cada palavra é separada por um *underline* (_), mas todas as letras são em maíusculas. Muito utilizado para nomear constantes em JS.

## Variáveis

`var` foi o primeiro termo para criação de uma variável no JavaScript. Ao declarar uma variável `var`, esta poderá ser acessada em qualquer local do código.

Já a palavra reservada `let` foi implementado posteriormente para declararmos variáveis que funcionarão apenas dentro de um bloco, como uma função ou uma condicional, por exemplo. Ela foi criada com o intuito de proteger variáveis dentro de um bloco, para não ser reutilizada e perdermos informações caso o nome seja repetido, bem como para otimizar a aplicação, pois a variável só estará ativa durante a execução do bloco, e isso gera menos stress para a máquina.

### Características

* **Escopo diferentes**: Var é global e let é em bloco

* **Hoisting**: É atribuir valor a uma variável antes de declarar um valor a ela. Apenas Var tem essa capacidade.

* **Redeclaração**: Podemos declarar uma Var mais de uma vez, e a Let apenas uma vez

* **Reatribuição**: Podemos atribuir um novo valor tanto para Var quanto para Let, desde que elas estejam dentro do escopo a qual pertencem

* **camelCase**: Tanto Var quanto Let costumam ser declaradas por convenção seguindo o padrão de camelCase.


## Constantes

Como o próprio nome já diz, uma constante é uma variável que não é alterada. Nós a declaramos uma vez utilizando a palavra reservada `const` e não a alteramos durante a execução do código, apenas é chamado.

### Características

* Declarada em SNAKE_UPPER_CASE

* Escopo de bloco

* Não faz *hoisting*

* Não faz Reatribuição

* Não faz Redeclaração

### Exemplo

```
const DAYS_IN_A_WEEK; 7;
const FIRST_NAME: 'Paulo';
```

## Resumindo

Características | var | let | const
:--- | :---: | :---: | :---:
Escopo | global ou local | bloco | bloco
Redeclarar | sim | X | X
Reatribuir | sim | X | sim
Hoisting | sim | X | X
Convenção | camelCase | camelCase | SNAKE_UPPER_CASE
