# O que é Flux?

Flux é uma arquitetura criada pelo Facebook para a comunicação entre componentes.

O Flux é um padrão de projeto para tráfego de dados de maneira unidirecional.

Ele é composto por 4 partes com responsabilidades distintas:

## Action

É como um telégrafo. Ela formata a mensagem a ser enviada

## Dispatcher

Como um telefonista. Sabe todos os callbacks para as diferentes Stores, ou seja, ele redireciona onde cada um dos dados, das mensagens da Action, devem ser armazenadas

## Store

É como um gerente super controlador. Ela guarda todas as informações, mas também é ela que realiza a alteração, cabendo a nós apenas pedir a alteração a ela

## View

A view é como um gerente intermediário, que recebe as notificações da store e passa os dados para as visões abaixo dela. Ou seja, pega o que está com o Store e entrega para o DOM do browser, por exemplo.

## Implementações

A Flux pode ser aplicada em diversas estruturas. Nós aprenderemos no Redux, que é atualmente o mais popular, mas temos também:

* Redux (mais popular)

* Reflux

* Mobx

* Vuex (baseado em Redux e Elm)

* NgRx/store (baseada em Redux e RxJS)

Servem para comunicação entre componentes, centralizam a informação.

Você não precisa nem deve usar a Store para armazenar todos os dados, apenas aqueles que serão realmente usados entre vários componentes.

> Flux libraries are like glasses: you'll know when you need them" - Dan Abramov, criador do Flux
