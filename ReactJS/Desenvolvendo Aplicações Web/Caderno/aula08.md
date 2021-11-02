# Imutabilidade e Redux

## Imutabilidade

Considere a coleção como um ou mais elementos. Uma tupla, um array, um obj, etc.

* Uma vez criada, uma coleção não pode ser alterada.

* Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto.

* Novas coleções são criadas usando o máximo possível de uma estrutura original, reduzindo a cópia e aumentando a performance.

### Vantagens

* Performance

* Programação mais simples

* Debugging mais simples (detecção de mudanças)

## Imutabilidade em React

* Se você quer performance em React, use dados imutáveis

* Você pode fazer iso utilizando o `shouldComponentUpdate` ou `React.PureComponent`.


```JS
class CounterButton extends React.Component {
    constructor(props){
        super (props)
        this.state = {count: 1}
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color){
            return true;
        }
        if (this.state.count !== nextState.count){
            return true
        }
        return false
    }
}

render() {
    return(
        <button
            color={this.props.color}
            onClick={() => this.setState(state =>({count: state.count + 1}))}
        >
            Count: {this.state.count}
        </button>
    )
}
```

```JS
class CounterButton extends React.PureComponent{
    constructor (props){
        super(props);
        this.state = {count: 1}
    }

    render() {
        return(
            <button
                color = {this.props.color}
                onClick={() => this.setState(state=>({count: state.count + 1}))}
            >
                Count: {this.state.count}
            </button>
        )
    }
}
```

O PureComponent vai fazer uma comparação rasa entre os valores antigos e os novos. Dessa forma, se não tivermos uma estrutura imutável, não conseguiremos renderizar o novo estado, porque ele vai comparar o array novo com o antigo, e se ao invés de criarmos um novo array, só extendermos o antigo, ele vai ser igual na hora de fazer a comparação.

Para resolver isso, temos duas alternativas:

Cricar um novo array, que copia o original, mas adiciona uma cópia com os dados novos, e então eles serão comparados, usando um spread, por exemplo.


```JS
handleClick() {
    this.setState (state=> 9{
        words: [...state.words, 'narklar'],
    })
}
```

Ou então utilizar uma biblioteca de imutabilidades, que é uma biblioteca que fornece coleções persistentes e imutáveis, permitindo uma detecção barata de alterações nos objetos. Uma das mais utilizadas é a **Immutable.js**.

```JS
const x = {foo: 'bar'}
const y = x
y.foo = 'baz'
x === y // true
```

Quando criamos uma cópia e alteramos o valor de um valor de um objeto em JS, nós acidentalmente também mudamos a variável que está igualada a ela. Para resolver isso, temos que recorrer a uma estrutura imutável, como a presente na biblioteca Immutable.js

```JS
const SomeRecord = Immutable.Record ({ foo: null})
const x = new SomeRecord (foo:'bar')
const y = x.set ('foo', 'baz')
const z = x.set ('foo', 'bar')
x === y //false
x === z //true
```

O que a biblioteca Immutable faz é nos proporcionar uma forma de copiar os dados de um objeto e alterá-lo sem mexer na estrutura original, através do comando `.set`.

Bibliotecas:

* [Immutable.js](https://immutable-js.com/)

* [Immer](https://immerjs.github.io/immer/)

* [Immutability-helper](https://github.com/kolodny/immutability-helper)

* [Seamless-immutable](https://github.com/rtfeldman/seamless-immutable)

## Imutabilidade e Redux

Imutabilidade é um pré-requisito no Redux

Redux e React-Redux utilizam Comparações rasas

Manimupação de dados mais segura

Time-travel debugging

Os reducers dividem o objeto de estados em domínios por uma chave, os combineReducers checa mudanças usando a comparação rasa, fazendo a interação nos reducers e criam um novo objeto de estados a partir dos estados retornados por cada reducer

Por sua vez, o connect gera componentes que fazem comparação rasa com o estado root, e retornam o valor para a função mapStateToProps, verificando aqueles que precisam de uma operação de re-render.
