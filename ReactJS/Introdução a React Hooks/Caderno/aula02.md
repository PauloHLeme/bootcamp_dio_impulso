# Styled Components

A biblioteca de [Styled Components](https://styled-components.com/) chegou para nos proporcionar a possibilidade de criarmos os estilos CSS dos elementos através do nosso código JavaScript.

Com isso, podemos criar variáveis que nos permitem escrever um código CSS comum dentro dele, evitando que criemos um documento CSS separado e tenhamos que ficar criando classes para estilizar nossos componentes.

Para utilizarmos o Styled Components, após termos ele instalado, nós faremos a importação da biblioteca para a nossa aplicação e utilizaremos a palavra reservada `styled` para criar nosso estilo em CSS.

Dessa forma, podemos criar constantes com o elemento estilizado e então passarmos o nome dessa constante como sendo a Tag a ser utilizado no nosso JSX

```JSX
import narutoImg from '../../images/naruto.png'
import styled from 'styled-components'

export function App() {

    return(
        <Content>
            <p>lorem ipsum - Speaker</p>
            <button>Quote No Jutsu</button>
            <NarutoImg
                src={narutoImg}
                alt="Naruto with a kunai"
            />

        </Content>
    )
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-itens: center;
`

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`
```

Note que na constante utilizamos a palavra reservada styled seguida do tipo de tag que ela estará assumindo, e depois criando nosso CSS normalmente entre ``.

Podemos também aplicar um estilo sobre outro já definido antes. Vamos supor que temos 2 parágrafos para estilizar. Com a única diferença de que um terá uma margem abaixo e um alinhamento a direita, e de resto, serão iguais.

Podemos criar então o estilo do primeiro parágrafo, que vamos chamar de Quote, e então utilizar ele como base para fazer o segundo, que chamaremos de Speaker. Veja como fica:

```JSX
const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px
`
```

Podemos também passar o sub-classes como :hover por exemplo utilizando a seguinte sintaxe:

```JS
export const Button = styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    width: 200px;
    margin: 0  auto;

    &: hover {
        background: #a40000;
    }
`
```

