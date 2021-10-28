# Preparação de Ambiente

## Instalação e criação do arquivo

Precisamos baixar o Node no [site oficial](https://nodejs.org/en/download).

A instalação leva um tempo, pois ele vai criando várias dependências nos nossos arquivos, de módulos que serão utilizados.

Depois de feita a instalação, basta digitarmos cd e o nome da pasta para entrarmos nela, neste caso `cd react-dio`, e estando dentro dela podemos digitar `code .` que o projeto irá abrir no VSCode! Parece difícil, mas não é!

## Estrutura de um projeto React

Após criarmos o nosso projeto, ele terá 3 pastas:

* node_modules: Onde ficam as dependências do React. Todas as informações que o React precisa internamente.

* public: Nele teremos o nosso único arquivo HTML. O React produz páginas com estilo SPA, ou Single Page Application. Todo o site, todas as páginas e todos os elementos rodarão em um único documento HTML que irá renderizar seus elementos de acordo com o que o código do nosso projeto React enviar para ela.

* src: Onde os nossos arquivos de código efetivamente ficarão, e onde criaremos nossos módulos e elementos

## Importando um projeto React

Se importarmos um projeto ou clonarmos ele de um repositório Git por exemplo, basta abrirmos a pasta do projeto e rodarmos o comando `npm i` que o npm vai baixar e instalar todas as dependências necessárias para o projeto.

## Por que React?

Podemos criar um projeto novo a partir do terminal. Pode parecer mais complexo do que criar uma pasta da forma tradicional, mas por ele podemos chamar comandos que nos auxiliaram e criarão os documentos necessários para o nosso projeto!

O comando utilizado será `npx create-react-app react-dio`. Sendo que a última parte do comando é o nome da pasta a ser criada, o nome do projeto.

React é um framework baseado em JS que vai permitir que criemos aplicações modularizadas.

Trabalhar com componentes modularizados nós podemos ter menos dependência dos elementos de uma página. Sendo assim, um problema em um módulo da página não vai atrapalhar o funcionamento da outra.

Da mesma forma, podemos apenas reutilizar módulos já criados para montarmos outros elementos da página, deixando o nosso trabalho mais otimizado, até utilizando menos código!

