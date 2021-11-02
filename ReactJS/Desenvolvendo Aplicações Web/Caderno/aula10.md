# TDD e BDD com Jest

Test Driven Development é um desenvolvimento orientado a testes. Ele é o processo de escrever um código de testes, antecipando erros a nível de desenvolvimento. O teste automatizado é uma garantia, mas não descarta a presença de um tester.

## Ciclo de Vida TDD

1. Escreva um teste que falha

2. Faça o código funcionar

3. Elimine redundâncias

Existem as vertentes de teste Unitário e teste End-to-End.

Existem várias bibliotecas para fazermos esses testes. A Jest já vem implementada em uma instalação via `create-react-app`. Mas existem várias outras, como a React-testing-Library, que é uma das mais indicadas pela comunidade React.

## Teste de função

```JS
function soma (a, b){
    return a + b;
}
```

```JS
import {soma} from './soma'

describe('testando função soma', () =>{
    it('A soma deve dar 3', () =>{
        const res = soma(1, 2)
        expect(res).toBe(3);
    })
})
```

Fazer o teste primeiro é legal pois isso vai fazer você trabalhar em um código de forma a proporcionar as ferramentas para o teste. Muitos códigos acabam não atendendo a formas de chamar os testes, e para serem testados acabam por terem que ser refatorados.

## Teste de Componente

`npm install --dev @testing-libray/react` e `npm install --dev @testing-libray/jest-dom/extend-expect`

```JS
import React from 'react'

const Basic = (props) =>(
    <p>Meu nome é {props.name}</p>
)

export default Basic;
```

```JS
import React from 'react'
import Basic from './Basic'
import { render } form '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe ('Testando Basic', () => {
    it('O componente Basic deve renderizar corretamente', () => {
        const { baseElement} = render (<Basic name = "Lilith"/>)
        expect(baseElement).toHaveTextContent('Meu nome é Lilith')
    })
})
```

## BDD

Behavior-Driven Development é um teste de especificação, é um nível de teste mais aprofundado, levando em conta o comportamento do aplicativo.

## Sintaxe Gherkin

é uma sintaxe de passos (steps) para  definir cenários, descrevendo para a máquina cada funcionalidade por feature.

Temos para BDD o Jest-cucumber e o Chai, como bibliotecas.

`npm install --dev jest-cucumber`


