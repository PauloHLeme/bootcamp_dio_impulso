# Renderização Condicional

> Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação. [ReactJS.org](https://pt-br.reactjs.org/docs/conditional-rendering.html)

## Variáveis de elementos

Elementos podem ter variáveis que vão influenciar no seu comportamento, estado e renderização.

Na série de exemplos que vamos montar, utilizaremos uma varíavel `const hasCustomer = false`, que vai influenciar no funcionamento do nosso elemento.

## if inline com operador lógico &&

Podemos realizar um comando if dentro do nosso JSX para exibir ou não um elemento.

No caso abaixo, só vamos mostrar o botão e o texto acima dele se tivermos a constante hasCustomer como verdadeira, caso contrário, nada disso aparecerá.

Para isso, nós abrimos chaves{}, pois todo o conteúdo em JS deve estar dentro de chaves.

Então declaramos a condição com o uso do operador lógico &&. Observe o exemplo:

```JSX
const hasCustomer = false

const App = () => {
    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula</p>
            {hasCustomer && (
                <div>
                    Clique no botão abaixo para visualizar o histórico dos clientes.
                    <br/>
                    {buttonA}
                </div>
            )}
        </div>
    )
}
```

## if-else inline com operador condicional

Podemos ainda utilizar operadores lógicos, como if-else, ou como no caso abaixo, operadores ternários:

```JSX
const hasCustomer = false

const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes.
            <br/>
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique abaixo para cadastrar o cliente
            <br/>
            {buttonB}
        </div>
    )

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer() }
        </div>
    )
}
```

## evitando que um componente seja renderizado

Podemos também adicionar uma verificação para renderizar ou não um componente.

Se um retorno no React for Null, ele não vai renderizar o bloco!

```JSX
    const showCustomer = () => {
        if(!hasCustomer) return null

        return(
            <div>
                <h1>Nome do Cliente: Paulo Leme</h1>
            </div>
        )
    }

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer() }
            <div>{showCustomer()}</div>
        </div>
    )
```
