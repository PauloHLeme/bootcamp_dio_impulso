# O que é Redux

Criado por Dan Abramov e Andrew Clark em 2015. É uma implementação de Flux, mas possui algumas diferenças de projeto.

## Diferenças

Em Redux, a estrutura do fluxo de dados é um pouco diferente.

Ao invés de Action, Dispatcher, Store e View, nós temos os elementos React, Action, Store e Reducer. Abaixo, uma ilustração de como segue o esquema de fluxo de informações:

![fluxo de dados de uma estrutura Redux](https://github.com/PauloHLeme/bootcamp_dio_impulso/blob/main/ReactJS/Desenvolvendo%20Aplica%C3%A7%C3%B5es%20Web/img/redux-data-flow.png)

## Princípios

1. Single source of truth: Tem uma única store

2. State é read-only

3. Mudanças de estado são feitas com pure functions

## Actions

São como as Actions do Flux, mas não enviam a Action em si para o Dispatcher, mas sim já retornam um objeto de action formatado

## Store

Diferente do Flux, no Redux nós temos apenas uma única Store.

A Store vai cuidar e armazenar toda a árvore de estados, mas conta com os Reducers que cuidarão para encontrar qual state que será alterado.

## Reducers

Os reducers são os componentes que irão dividir os estados em pequenos blocos de Reducers, para descobrir como tratar com esse State. Vale lembrar que os States são imutáveis.

## Views

Em React, adiciona na camada de View 3 novos conceitos para conectar a View com a Store.

1. Provider: Tem como responsabilidade facilitar a comunicação dos elementos filhos se conectarem a store. Ele tem controle da árvore de elementos

2. connect(): É uma função interna do Redux que faz a conexão desses elementos com a store para pegar os dados necessários.

3. selector: É uma função que nós escrevemos para selecionar os campos exatos que queremos.
