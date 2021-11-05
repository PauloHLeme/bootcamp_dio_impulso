# Error Boundaries

>Um erro de javaScript em uma parte da UI não deve quebrar toda a aplicação. Para resolver este problema para usuários do React, o React 16 introduziu um novo conceito de "error boundary". *ReactJS docs*

O ErrorBoundary não é uma funcionalidade introduzida no Framework, não é uma função específica criada dentro do React, nem nada construído dentro do código. Ele é um conceito, um guia de boa prática que podemos seguir para lidarmos com os erros das nossas aplicações.

Ele consiste em criar um "limite" de execução de um bloco de componentes que compõem uma interface de modo que, caso ela apresente um erro, ele seja tratado dentro deste limite, e não que isso possa gerar um efeito em cascata em toda a árvore da aplicação.

Para fazer isso, nós criamos um elemento de tratamento de erros que vai envelopar com a sua tag esses blocos.

Neste exemplo, construímos usando um componente de tipo Classe um componente denominado ErrorBoundary.

```JS
import React, { Component } from "react";
import errorIMG from './img/error.png'

class ErrorBoundary extends Component{

  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, errorInfo){
    console.log('error:', error)
    console.log('error:info',errorInfo)
    this.setState({
      hasError: true
    })
  }

  render(){
    if(this.state.hasError){
      return <div>Função indisponível no momento</div>

  }
  return this.props.children
  }
}

export default ErrorBoundary
```

Como você pode ver, a função dele é pegar erros gerados no sistema e realizar os tratamentos necessários nele.

A tag gerada por esse elemento, por sua vez, vai ser a tag pai de um conjunto de componentes que fazem parte de um bloco da UI da aplicação.

Vamos tomar como exemplo uma aplicação que tem vários componentes em tela, incluindo um elemento de formulário.

```JS
render(
  <App>
    <Header />
    <MainContent />
    <ErrorBoundary>
      <Card />
      <Form />
    </ErrorBoundary>
  </App>
)
```

Perceba que o ErrorBoundary está cuidando do card e do form. Dessa forma, se ele pegar algum erro, será tratado neste bloco, neste contexto, e não deve interferir nos elementos restantes da aplicação.

## Erros não capturados

Error boundaries não capturam erros em:

* Manipuladores de evento

* Códigos assíncronos

* Renderização no servidor

* Erros lançados no próprio error boundary
