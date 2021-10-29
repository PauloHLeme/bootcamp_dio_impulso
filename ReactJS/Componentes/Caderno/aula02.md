# Construindo a Aplicação

## Como funciona a renderização do nosso app na página

Na nossa página HTML temos apenas uma tag `div` com a `id` *root*. Essa div é onde o nosso elemento será renderizado, será exibido.

Para isso, o nosso arquivo `index.js` importa uma função nativa do `React` chamada `ReactDOM`, e executa um método interno dela chamado `render`.

Esse ReactDOM.render recebe dois parâmetros:

O primeiro é o que ele vai exibir, que são as tags que passamos, representando nossos elementos criados.

O segudo é onde o elemento será renderizado na nossa página HTML. aí entra a nossa div root, que vai ser chamada com um comando básico do JavaScript

```JS
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
```

## Elementos irmãos

Em componentes do React nós não podemeos criar elementos irmãos dentro de um único retorno. Então, uma escrita como:

```JSX
const App = () =>{
    return(
        <h1>Hello, World</h1>
        <p>Eu sou um parágrafo</p>
    )
}

export default App;
```

Nos retornará um erro.

Para que esses dois elementos possam funcionar, eles devem estar dentro de um outro elemento pai, que será único para o retorno. Aí sim, seus filhos podem ser diversos.

Podemos fazer isso de duas formas:

```JSX
const App = () =>{
    return(
        <div>
            <h1>Hello, World</h1>
            <p>Eu sou um parágrafo</p>
        </div>
    )
}
```

Nesta primeira forma, criamos uma div e inserimos os elementos filhos dentro. Agora nosso código funcionará. O problema é que isso pode gerar muitas divs desnecessárias no nosso html final e poluir nosso código.

Felizmente, existe uma solução simples, chamada de React Fragments:

```JSX
const App = () =>{
    return(
        <>
            <h1>Hello, World</h1>
            <p>Eu sou um parágrafo</p>
        </>
    )
}
```

Neste caso, basta abrirmos e fecharmos uma tag sem nenhum elemento interno a identificando. Isso fará com que o React entenda ela como um "fragmento" de código com elementos filhos internos, mas ainda como um bloco único, e quando isso gerar o HTML para carregar na página, não gere uma nova div, e sim coloque apenas os filhos!

## Componentes

Imagine agora que estamos criando uma lista de itens.

Cada linha é um elemento, uma tag li. Podemos criar várias dessas tags manualmente se quisermos, mas isso seria trabalhoso, e principalmente, impossível caso seja um projeto muito grande.

Para isso, podemos criar um componente novo em um novo arquivo, criar essa li neste componente, e depois utilizar ela importando para dentro do nosso App. É assim que o React funciona. Cada componente novo pode ser feito de forma independente e então puxado pra dentro de um bloco maior. Separando responsabilidades, quebrando o código em módulos. Organizando o conteúdo!

## Importando componentes

Após criarmos o nosso elemento de lista separado do arquivo principal do aplicativo, nós temos que chamá-lo para dentro do arquivo, importar o nosso elemento.

Para isso, utilizamos no começo do código o comando `import`. Ele vai ser responsável por buscar o elemento dentro do arquivo separado. Para isso, depois de dizer import, dizemos o nome do elemento, no nosso exemplo, *Item*, da pasta (`from`) *components*

```JSX
import Item from "./components/item";
```

Agora basta utilizarmos ele dentro do código! Ao importarmos esse item, nós o receberemos como se fosse uma tag HTML, com o nome dele sendo igual ao nome declarado na importação:

```JSX
import Item from "./components/item";

const App = () =>{
    return(
        <>
            <h1>Minha primeira aplicação com React</h1>
            <ul>
                <Item />
            </ul>
        </>
    )
}
```

## Trocando dados entre componentes

Se no nosso componente Item nós colocarmos um texto estático, como Item01, por exemplo, teremos um problema. Nós seremos capazes de replicá-lo onde quisermos, mas o conteúdo será igual em todos eles.

Por isso é ideal que nossos elementos tenham funções, como neste exemplo ser um item de uma lista, mas não tenham o conteúdo, se adaptando conforme cada item precisar.

Para isso, vamos lá no código do nosso item e vamos trabalhar nele.

```JSX
const Item = () => {
    return(
        <a
            href="/"
            className="list-group-item list-group-item-action list-group-item-dark"
        >
            Item 01
        </a>
    )
}

export default Item;
```

Esse era nosso código. Agora, como vamos transformar o texto interno dele no texto que quisermos colocar lá no nosso App, no nosso elemento que está utilizando esse Item?

Ao exportarmos o nosso Item, ele virou um tipo de Tag HTML. As tags possuem propriedades, como `class`, `id`, `style` e vários outros, certo? Existem propriedades que são específicos de tags específicas, como um src é uma propriedade de uma `img` ou `media`, mas não de um `h1` ou `p`. Da mesma forma, podemos criar propriedades únicas para os nossos elementos!

```JSX
const Item = (props) => {
    return(
        <a
            href="/"
            className="list-group-item list-group-item-action list-group-item-dark"
        >
            {props.texto}
        </a>
    )
}

export default Item;
```

Agora, passamos para o Item um aviso lá nos parênteses da função dizendo que ele pode receber propriedades. Fazemos isso utilizando a palavra `props`. Lá embaixo, onde antes colocamos nosso texto padrão, agora vamos substituir por um código JavaScript (e todo código javascript em um elemento deve estar dentro de chaves), vamos passar o `props.texto`. *props* para dizer que isso vai receber uma propriedade, e *texto* será o nome dado para essa propriedade.

Agora vamos no nosso App e vamos inserir essa propriedade na tag `<Item />`

```JSX
const App = () =>{
    return(
        <>
            <h1>Minha primeira aplicação com React</h1>
            <ul>
                <Item texto='Item 01'/>
                <Item texto='Item 02'/>
                <Item texto='Item 03'/>
            </ul>
        </>
    )
}
```

Pronto! Agora nosso elemento vai exibir dentro dele o que estamos passando na propriedade texto! E com isso podemos criar infinitos itens, cada um com uma informação, em qualquer parte do nosso projeto, basta utilizar o Item que criamos!

## Children

Mas também temos uma forma diferente.

Se preferirmos, ou se for melhor, dependendo da ocasião que o nosso código preferir, podemos utilizar uma propriedade chamada `children`.

Ela é uma propriedade especial que podemos colocar no nosso componente, e vai chamar como elemento o que estiver dentro da nossa tag. Lembra do contexto de tags pais e filhas em HTML, o children é exatamente isso! Pega a filha da nossa tag e insere dentro dela no nosso código.

Então, para isso, alteraríamos o nosso Item para:

```JSX
const Item = ({children}) => {
    return(
        <a
            href="/"
            className="list-group-item list-group-item-action list-group-item-dark"
        >
            {children}
        </a>
    )
}

export default Item;
```

e o nosso App chamaria o item da seguinte forma:

```JSX
const App = () =>{
    return(
        <>
            <h1>Minha primeira aplicação com React</h1>
            <ul>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </ul>
        </>
    )
}
```

Vale dizer que não existe método melhor ou pior para se utilizar. O que existe é a melhor utilização para o momento em questão. O que nossa aplicação e nosso código pedem como melhor uso!
