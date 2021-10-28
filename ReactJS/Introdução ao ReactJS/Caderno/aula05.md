# Webpack

## O que é

Webpack é um mobile bundler, um empacotador de modulos para aplicações. No nosso caso, aplicações JavaScript.

Podemos gerar nosso bundler através do [webpack.js.org](https://webpack.js.org/).

## Suporte

* Fontes

* CSS

* Imagens

* HTML

* JS

* Plugins

## Configurando o webpack

* Entry: utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências

* Output: É para determinar quais são os bundlers que o Webpack irá emitir

* Loaders: é para permitir que o Wewbpack gerencie arquivos que não são JavaScript

* Plugins: Podem ser utilizados para otimização de pacotes, minificação e outras funcionalidades

* Mode: Utilizado para abordagem de configuração zero. É possívbel configurar nódulos como production, develpment ou none

    * Production trás otimizações internas

    * Development executa três plugins mais básicos

    * None não passa nenhuma config

## Criação

Criar o arquivo webpack.config.js

`npm i -D webpack webpack-cli`

`"build": "webpack --mode production"`

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`
