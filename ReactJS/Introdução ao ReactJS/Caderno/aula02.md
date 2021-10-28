# Configuração

* React Create App: Biblioteca para criar e iniciar um projeto front-end

* React Scripts: Biblioteca disponibilizada para se criar a parte

* Task Runners e Bundler Sizers: Integrado a sistemas Task Runners e Bundler Sizers

## Configurando

Lembre-se de ter o npm instalado na sua máquina. Se não tiver, instale o NodeJS na máquina, que o NPM virá junto.

Feito isso, vamos abrir o terminal na pasta onde queremos criar nosso projeto e digitar o comando `npm init`.

O terminal vai perguntar algumas configurações. Podemos apenas ir confirmando até finalizar o processo.

Com isso, nós teremos iniciado um projeto, agora, falta instalar o React em si nesse projeto. Vamos utilizar para isso o comando `npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1`. O comando npm install serve para fazer a instalação. Os demais parâmetros que enviamos são para criar um servidor e dizer a versão do React.

Agora é esperar a instalação concluir!

## Importante!

React é uma SPA (Single Page Application). Ele vai baixar todo o projeto e renderizar todas as rotas. Conforme as interações, as rotas vão mudando, o conteúdo exibido também, mas a página continua a mesma!

# O que é JSX?

```JSX
const element = <h1>Hello, world!</h1>;
```

O que está acima não é nem HTML e nem uma string comum de JavaScript. O JSX é uma linguagem de marcação que utiliza o poder de código do JavaScript, mas ainda mantendo a marcação HTML.

React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes.

Não é obrigatória a utilização do JSX. Ele é uma Sintax Suggar para React.createElement

O browser não interpreta o JSX, para isso é necessário um transpilador, que traduz para o browser o que o JSX diz. Como instalamos o projeto via NPM, já temos um transpilador embutido!

## Exemplo

```JSX
function primeiroJSX(){
  return(
    <div>
      Paulo Leme
    </div>
  )
}

const App = () => {
  return(
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

Perceba que no return da função, nós abrimos um parênteses e digitamos direto a div, que é um elemento HTML. O JSX é que nos permite fazer isso, digitar o html ao invés de ter que ficar utilizando parâmetros como createElement ou innerHTML, por exemplo.

Embaixo, na constante App, nós chamamos a função primeiroJSX() entre chaves {}. Fazemos isso para que o código entenda que essa chamada é de um código JavaScript.

Finalmente lá embaixo selecionamos o elemento root do nosso arquivo HTML e mandamos o ReactDOM renderizar essa constante como se fosse uma tag.
