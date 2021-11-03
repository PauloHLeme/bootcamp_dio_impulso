# Ciclo de Vida

## Inicialização

Inicializar o componente, passar as props e o state inicial

## Montagem

Componente é montado, renderiza a tela pela primeira vez

## Atualização

Componente recebe novas propriedades, altera seus estados e realiza nova renderização, sem ter que recarregar toda a página para mudar apenas um pedaço do que aparece

## Desmontagem

Quando o componente não tem mais utilizado e então é destruído.

## Components

### Depreciados a partir da versão 17

* `componentWillMount`
* `componentWillReceiveProps`
* `componentWillUpdate`

### Bem utilizados

* `componentDidMount`
* `componentDidUpdate`
* `componentDidcatch`
* `componentWillUnmount`
* `shouldComponentUpdate`

### Raramente utilizados

* `getDerivedStateFromProps`
* `getSnapshotBeforeUpdate`


## componentDidMount

é uma função para que passemos parâmetros APÓS a montagem do componente, mas ANTES de sua re-renderização.

Vamos dizer que precisamos passar dados de posts do twitter, mas que não serão utilizados assim que o componente for renderizado, mas que precisam estar carregados antes de uma nova renderização. Para isso, podemos passá-los dentro do componentDidMount:

```JS
class Twitter extends Component{

  componentDidMount(){
    const { posts } = this.props
    console.log('componentDidMount', posts)
  }

  render(){

    const { posts } = this.props
    console.log('render',posts)
    return(
      <div>
        teste
      </div>
    )
  }
}
```

É muito útil para chamarmos serviços ou verificar se um estado foi carregado corretamente.

## componentWillUnmount

É uma função utilizada para disparar eventos que ocorrerão ao desmontarmos um elemento e pararmos de renderizá-lo na tela.

Vamos utilizar o código anterior do Twitter como exemplo. Vamos apenas adicionar um console.log que vai dizer quando ele desmontar:

```JS
componentDidMount(){
  ...
}

componentWillUnmount(){
  console.log('Fui desmontado')
}

render(){
  ...
}
```

Agora, dentro do nosso App, vamos adicionar um botão que vai desativar o componente Twitter:

```JS
class App extends Component{

  state = {
    active: true,
  }

  onRemove = () => {
    this.setState({
      active:false,
    })
  }

  render(){

    return(
      <div>
        <button
          onClick={this.onRemove}
        >
          Remover Componente
        </button>
        {this.state.active && (
          <Twitter posts={posts} />
        )}
      </div>
    )
  }
}
```

Vale lembrar que ao clicar no botão, disparamos o seu atributo onClick, que por sua vez chama a função onRemove. ela vai alterar o state active para false.

No código, mandamos o componente Twitter ser exibido apenas se o active for igual a true `{this.state.active && (<Twitter posts={posts} />)}`. Sendo assim, ao apertarmos o botão, o state active muda para falso e o componente Twitter para de ser renderizado.

Ao parar de ser renderizado, ele é desmontado, executando antes o que estiver dentro do componentWillUnmount. Ou nesse nosso caso, o `console.log('Fui desmontado')`.

Ele é muito útil para apagarmos dados que não serão mais utilizados, ou desligarmos uma função de timeout, que vai continuar sendo executada caso o componente seja desmontado.

## shouldComponentUpdate

Com ele podemos passar um teste que vai retornar um booleano. Caso o retorno seja true, o componente vai re-renderizar, caso seja false, ele não atualiza.

Isso é muito utilizado para situações onde há um processo que geraria uma mudança, mas que não muda o que seria renderizado em tela. Nessa situação, podemos evitar que seja novamente renderizado e consuma memória.

```JS
shouldComponentUpdate(nextProps, nextState) {
  return this.state.tweet !== nextState.tweet
}
```

Aqui fizemos uma comparação para verificar se o state atual é igual ou diferente do state que está vindo. Se for igual, o retorno será false, então dizemos para o componente que ele não precisa atualizar.

Exercício

Crie uma aplicação passando por todos os passos do ciclo de vida do React
