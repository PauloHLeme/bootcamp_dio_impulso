# Hooks React

No React em sua forma inicial, tínhamos dois tipos de elementos: stateful e stateless

Compomentes que tinham estado definido e que pudesse variar durante o decorrer da aplicação eram feitos exclusivamente através de classes, pois as funções não conseguiam acessar e alterar estados e propriedades.

Com a evolução do código e uma abordagem cada vez mais voltada para a programação funcional, formas de contornar esse problema apareceram. os Hooks são a solução utilizada para que um componente funcional também passe a acessar estados.

Os Hooks são funções que fazem esse gancho, essa ligação aos recursos de state e ciclo de vida dos componentes React. Com os Hooks, basta que os importemos para o nosso componente e passemos a utilizá-los em nossas funções.

## useState

O Hook useState é um dos mais utilizados durante a programação funcional no React. Ele serve para que acessemos os estados do nosso componente, nos dando a possibilidade da criação de um estado e de uma função para realizarmos a alteração deste estado:

```JS
import React, { useState } from 'react';
function ListaDeRepositorios() {
  const [repositorio, setRepositorio] = useState([]);
  …
 return (
    <>
      ...
    </>
  );
}
export default ListaDeRepositorios;
```

## useEffect

o useEffect é um Hook que nos auxilia a lidar com os efeitos colaterais de uma ação, além de nos auxiliar no ciclo de vida de um componente.

Normalmente passamos para o useEffect a função que queremos que execute e o elemento que ele monitore, para que ele execute essa função apenas na renderização deste componente.

É comum também chamarmos o useEffect sem passarmos um elemento para ele. Dessa forma, ele vai receber um array vazio e vai entender que deve ser executado uma única vez, normalmente na inicialização do nosso componente

```JS
import React, { useEffect } from 'react';
function ListaDeRepositorios() {
  useEffect(() => {
    async function carregaRepositorios () {
      const resposta = await fetch('https://api.github.com/users/julio-cesar96/repos');
      const repositorios = await resposta.json();
 return repositorios;
    }
    carregaRepositorios();
  }, []);

  return (
    <>
      ...
    </>
  );
}
export default ListaDeRepositorios;
```

## useRef

Utilizamos o useRef para persistirmos um valor de uma variável mesmo que, durante a re-renderização ele fosse sofrer uma alteração. Isso nos auxilia a manter alguns elementos imutáveis mesmo durante a renderização da tela.

```JS
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </>
  );
}
```

