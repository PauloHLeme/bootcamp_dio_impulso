# Estrutura de dados

## O que é estrutura de dados?

Estrutura de dados é uma estrutura organizada de dados na memória de um computador ou em qualquer dispositivo de armazenamento, de forma que os dados possam ser utilizados de forma correta.

Usando as estruturas adequdas através de algoritmos, podemos trabalhar com uma grande quantidade de dados, como aplicações em bancos de dados ou serviços de busca.

## Algoritmo

Um algoritmo é um conjunto de instruções estruturadas e ordenadas, seu objetivo é realizar uma tarefa ou operação específica.

São utilizados para **manipular** dados nas estruturas de várias formas, como por exemplo:

* Inserir Dados
* Excluir Dados
* Localizar um elemento
* Percorrer todos os itens constituintes da estrutura para visualização
* Classificar, que se resume em colocar os itens de dados em uma determinada ordem (numérica, alfabética, etc)


## Principais Estruturas de dados

* Vetores e Matrizes
* Registro
* Lista
* Pilha
* Fila
* Árvore
* Tabela Hash
* Gbootcamp_dio_impulsorafos


### Vetores e Matrizes

Vetores e Matrizes (também chamadas de *Arrays*) são estruturas de dados simples que podem auxiliar quando há muitas variáveis do mesmo tipo em um algoritmo.

De forma simplificada, uma matriz é uma variável única capaz de guardar vários valores, como sequências de números, lista de nomes, itens de uma lista.

#### Vetor

O vetor é uma estrutura de dados indexada (ou seja, tem coordenadas para conseguirmos pegar esses valores, iniciando pela posição representada como 0 e terminando no número desejado), que pode armazenar uma determinada quantidade de valores do mesmo tipo.

##### Exemplo

vetor numeros
39, 45, 54, 55

```
programa {
	funcao inicio() {
		inteiro numeros[] = {39, 45, 54, 55}

		escreva (numeros [0])
	}
}
```

#### Matriz

Matriz ou Array multi-dimensional é um vetor de vetores, ou seja nada mais é que um vetor que tem duas ou mais dimensões.

##### Exemplo

matriz numeros

0|1|2|3
:---: | :---: | :---: | :---:
2 | -1 | 3 | 1
0 | -2 | 5 | 4
-3 | 1 | 0 | 6


### Registros

Um Registro é uma estrutura que fornece um formato especial para armazenar informações em memória.

Enquanto um vetor ou uma matriz permite armazenar vários dados de um mesmo tipo, o Registro permite armazenar vários dados de tipos diferentes, como por exemplo números, textos, datas, etc...

##### Exemplo

Entrada | Tipo
:--- | :---
CPF | Números
Nome | Letras
Endereço | Números e letras


Toda estrutura de registro em um nome (ex: livro), e seus campos podem ser acessados por meio do uso do operador ponto (.). Por exemplo, para acessar o preço de um livro, poderíamos utilizar a seguinte declaração:

```
livro.preco
```

