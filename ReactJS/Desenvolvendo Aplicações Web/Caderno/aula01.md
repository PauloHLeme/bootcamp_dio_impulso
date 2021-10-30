# CSS componentes e elementos

Podemos estilizar um componente com CSS por três formas diferentes

1. Inline

2. Classes

3. CSS in JS

## Inline

```JSX
const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + imgUrl + ')'
};
function HelloWorldComponent () {
    return <div style = {divStyle}>Hello World!</div>
}
```

Desta forma, passamos os estilos em um objeto de uma constante, ou até mesmo em um arquivo json, que tem comportamento semelhante a um objeto.

Ele tem suporte a várias das tags HTML e CSS

### Prós

* Maneira prática e direta

* Ajustes Rápidos

* Testes de Estilo

### Contras

* Difícil Manutenção em grandes códigos

## Classes

```CSS
.div-style {
    color: blue;
    background: url('https://bit.ly/2L8xxHz');
}
```

```JSX
import './HelloWorldComponent.css';

function HelloWorldComponent () {
    return <div className="div-style">Hello World!</div>
}
```

### Prós

* Maneira mais prática, direta e modular

### Contras

* Difícil manutenção

* Pouca flexibilidade

* Conflitos com nomes

## CSS in JS

Pode ser instalado através do comando `npm install --save styled-components`

Com o styled-components instalado, o nosso código é capaz de gerar folhas de estilo CSS. Dessa forma, dentro da constante geradora do CSS do elemento, podemos passar código CSS comum, mas com a vantagem de aceitar variáveis e gerar um conteúdo dinâmico.

```JSX
const divStyle = styled.div`
    color: blue;
    background: url('${props} => props.imageUrl');
`;
function HelloWorldComponent () {
    const url = 'https://bit.ly/2L8xxHz';
    return <DivStyle imageUrl={url}>Hello World!</DivStyle>
};
```

### Prós

* Manutenção

    * Facilidade para remover CSS

    * Estilos Dinâmicos

* Performance

* Injeção automática de prefixos vendor
