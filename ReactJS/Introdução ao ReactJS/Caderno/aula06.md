# EsLint

EsLint serve para padronizar o código entre um grupo de devs em um mesmo projeto

`npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch`

Ao rodar o `npm run eslint`, ele vai nos dar todas as irregularidades com padrão do código!


## Source-map

É importante colocarmos no nosso webpac.config.js o atributo source-map. Ele vai enviar para a página o código html "limpo", ao invés de todos os caminhos de importação que o React usa por padrão.

Isso é útil pois vai facilitar bastante na hora de observarmos o código e encontrarmos erros.

Para adicioná-lo, devemos adicionar no primeiro objeto do `module-exports` do arquivo `webpack.config.js` o atributo `devtool: 'source-map',`.
