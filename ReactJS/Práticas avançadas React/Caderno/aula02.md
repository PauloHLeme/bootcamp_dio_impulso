# Hooks

>Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe. - [*Documentação ReactJS*](https://pt-br.reactjs.org/docs/hooks-intro.html)

* `useState`
* `useEffect`
* `useContext`

* `useReducer`
* `useCallback`
* `useMemo`
* `useRef`
* `useImperativeHandle`
* `useLayoutEffect`
* `useDebugValue`

## useEffect

Quando utilizado sem receber nenhum elemento referenciado no seu arrray auxiliar, o useEffect é chamado apenas na primeira chamada do componente, no seu início. Dessa forma, ele acaba assumindo o lugar do `componentDidMount` utilizado na sintaxe de classes.

Agora, se passarmos um argumento para o seu array auxiliar, ele atuará como um `componentDidUpdate`, realizando o teste para ver se o argumento foi atualizado para então renderizar:

```JS
  useEffect(() =>{
    console.log('componentDidUpdate',loading)
  },[loading])
  ```

Da mesma forma, podemos passar alguma função dentro do useEffect que será executada caso um componente seja recarregado. Um caso possível é onde o usuário digita o cep, que está sendo monitorado por um useEffect, que vai disparar uma pesquisa de cep assim que este for digitado no formulário, para retornar o endereço completo do usuário.

## useState

Um dos mais simples de se utilizar, mas também um dos mais frequentes, o useState nos permite incorporar estados a componentes funcionais, o que antes era de uso exclusivo dos componentes tipo classe.

para utilizarmos o useState, nós o declaramos com uma variável e uma função para alterar seu valor:

```JS
const [tweet, setTweet] = useState('title')
```

Feito isso, basta criarmos uma função que vai chamar o setTweet toda vez que precisarmos alterar seu valor, como no caso de um botão:

```JS
const handleTweet = () => {
  setTweet('Tweet atualizado')
}

  console.log('tweet atualizado', tweet)
  return(
    <div>
      {<button
        onClick={handleTweet}
      >
        re-render
      </button>}
      teste
    </div>
  )
```

## Regras dos Hooks

Não use Hooks dentro de funções JavaScript comuns, em vez disso, você pode:

* Chamar Hooks em componentes React

* Chamar Hooks dentro de Hooks Customizados

Seguindo essas regras, você garante que toda lógica de state no componente seja claramente visível nocódigo fonte.
