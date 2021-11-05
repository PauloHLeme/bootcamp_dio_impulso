# Context API

Context API é uma biblioteca que vem carregada por padrão em projetos React criados a partir de um comando `npx create-react-app`.

Seu objetivo é nos auxiliar a carregar estados de um elemento para outro com mais facilidade, não tendo que passar ele através de toda a árvore de elementos, mas sim podendo armazenar esses estados em áreas especiais e chamá-los por qualquer componente que precise acessá-lo.

Elementos compartilhados como por exemplo a escolha do tema que o usuário quer aplicar em toda a página ou a confirmação de que ele está logado podem se beneficiar do uso da Context API.

## Enviando elementos via Context API

Vamos supor que queremos ter dois temas para o nosso site. Então vamos criar uma variável que contenha as informações de cores desses dois temas:

```JS
const themes = {
  primary: {
    background: '#000',
    color: '#efefef'
  },
  secondary: {
    background: '#efefef',
    color: '#000'
  }
}
```

Nossa variável themes é um objeto que contém dois outros objetos, o primário que contém uma cor de fundo e outra de texto, e o secundário que contém as mesmas cores, mas em posições diversas.

Por hora, a variável está acessivel apenas no escopo do seu documento. Poderíamos exportá-la para os demais objetos e utilizá-la direto? Sim, poderíamos. Mas este esquema de cores é apenas um pequeno exemplo do que a Context API pode fazer por nós, que poderemos utilizar esse sistema dentro de vários elementos independentes.

Agora, dar acesso ao Context:

```JS
import { createContext } from "react"

export const themes = {
  primary: {
    background: '#000',
    color: '#efefef'
  },
  secondary: {
    background: '#efefef',
    color: '#000'
  }
}

export const ThemeContext = createContext(themes.secondary)
```

Perceba que o processo é muito simples. Basta importarmos o createContext e criarmos uma constante que irá exportar o objeto themes. Além disso, podemos passar um valor padrão, como fizemos ao colocar como parâmetro recebido pelo `createContex` o valor `themes.secondary`.

## Aplicando em um componente

Agora que temos o valor armazenado dentro da Context API, podemos passá-lo para outros elementos.

Temos um elemento chamado Card, contém um botão que queremos estilizar de acordo com o nosso tema criado.

Para isso, vamos passar por dois passos.

Primeiro de tudo, no App raíz, que vai conter a nossa aplicação principal, colocaremos nosso ThemeContext como uma tag que será a pai, a ancestral de todos os elementos internos que devam acessar nosso tema.

Perceba que utilizamos também um provider, que vai "providenciar" para os componentes internos o valor desejado.

```JS
import React from 'react'
import { ThemeContext, themes } from './Theme'
import Card from './Card'

function App () {

  return(
    <ThemeContext.Provider value={themes.primary}>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App
```

nesse caso, passamos o Provider e definimos seu valor como sendo o tema primário. Sendo assim, todos os componentes que acessarem as cores do nosso tema receberão o tema escolhido diretamente pelo App, que tem o controle sobre o que é enviado, ou providenciado.

Agora, vamos lá dentro do Card para podermos acessar o tema e estilizar conforme necessário:

```JS
import React, { useContext } from "react"
import { ThemeContext } from "./Theme"

function Card () {

  const theme = useContext(ThemeContext)

  return(
    <div>
      <button
        style={{
          background:theme.background,
          color:theme.color
        }}
      >
        Card Button
      </button>
    </div>
  )
}

export default Card
```

Ao criarmos o conteúdo inicial do Context, utilizamos a função createContext. Ao definirmos o elemento ancestral, utilizamos uma tag com nome do Context exportado. Agora, para chamarmos e usarmos os elementos que estão dentro da Context API, simplesmente utilizamos a função useContext.

Agora que chamamos a função useContext, basta irmos no estilo do nosso componente e utilizar os parâmetros passados internamente para dentro do nosso estilo!

## Adicionando parâmetros

Depois da Context criada, nós podemos aproveitá-la para passarmos novos parâmetros para nossos elementos. No exemplo abaixo, vamos criar um token que pode ser utilizado para autenticar a navegação dentro do site, por exemplo.

No componente App, ele será um estado. Mas se precisamos acessar mais profundamente, para não ter que ir passando esse estado de filho para filho de forma consecutiva, podemos armazená-lo dentro do Context, bastando para isso passarmos ele junto dos valores do nosso Provider.

```JS
import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './Theme'
import Card from './Card'

function App () {
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken('1354968413dfasd331')
    },4000)
  },[setToken])

  return(
    <ThemeContext.Provider value={{...themes.primary, token}}>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App
```

Agora, com esse token em mãos, vamos gerar um componente de formulário que ficará dentro do componente Cards, mas que só será exibido quando um login for realizado.

O timeout que passamos no App nada mais é que a simulação de um login realizado no 4 segundos após abrirmos a página.

Se não estivéssemos utilizando a Context API, teríamos que passar o token para dentro do Card e depois passar para o Form. Mas, graças a ela, não temos que alterar nada no nosso card, apenas adicionar ao formulário:

```JS
import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Form () {
  const context = useContext(ThemeContext)

  const renderForm = (
    <form>
      <label>Nome:</label>
      <input />
      <label>Email:</label>
      <input />
      <label>Idade:</label>
      <input />
      <label>Telefone:</label>
      <input />
    </form>
  )

  const renderNotLogged = (
    <h1>
      É necessário realizar o login
    </h1>
  )

  return(
    <div>{
      context.token ? renderForm : renderNotLogged}
    </div>
  )
}

export default Form
```

Pronto, aqui não estamos acessando nem o estilo, apenas o que nos interessa que é o token que está armazenado na Context API!

 [![Linkedin Badge](https://img.shields.io/badge/-SisnandoJunior-6633cc?-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/sisnando-junior-812050b6/)](https://www.linkedin.com/in/sisnando-junior-812050b6/)
