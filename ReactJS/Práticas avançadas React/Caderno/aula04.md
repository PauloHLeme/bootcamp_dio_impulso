# Fragments

>Um padrão comum no react é que um componente pode retornar múltiplos elementos. os Fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM. *ReactJS docs*

Os Fragmentos são formas de criarmos elementos em nosso código sem ficarmos poluindo ele com divs sem fim.

Um componente react pode ter várias tags dentro de si, desde que estejam todos dentro de uma única tag pai.

Geralmente criamos uma tag div para envelopar esses elementos dentro dela, mas em casos de tabelas, listas de itens, etc, podemos acabar criando várias divs desnecessárias apenas para que nosso código não quebre.

Para isso, o React trouxe o conceito de Fragments, que chegam para substituir o uso das divs nestes casos específicos.

Vamos tomar por exemplo um código:

```JS
return (
  <div>
    <ul>
      <Items />
    </ul>
  </div>
)
```

E dentro dessa lista, teremos seus itens. Agora, para criar esses itens dentro de outro componente, não podemos fazer:

```JS
return(
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
)
```

O React vai retornar um erro, pois precisamos de um elemento único passando todas as outras tags. Então para isso, normalmente utilizaríamos uma div:

```JS
return(
  <div>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </div>
)
```

Mas acontece que, se formos analizar o código do HTML que o React vai gerar, ficaria algo como:

```JS
return(
  <ul>
    <div>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  </ul>
)
```
Essa div estaria totalmente desnecessária.

É aí que entra o Fragment. Ele é uma espécie de tag que vai ser lida pelo React, interpretada, mas que não vai gerar uma tag no arquivo HTML final.

Para colocarmos um Fragment, temos três alternativas:

## React.Fragment

Nessa primeira forma, apenas trocamos a tag por React.Fragment.

```JS
import React from 'react'

return(
  <React.Fragment>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </React.Fragment>
)
```

Mas ainda podemos diminuir essa tag apenas aprimorando nosso import:

## Fragment

Aqui nós importamos o Fragment de forma específica, não precisando passar ele como uma propriedade de uma tag React:

```JS
import React, { Fragment } from 'react'

return(
  <Fragment>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </Fragment>
)
```

## Sintax Sugar

Podemos ainda simplesmente abrir e fechar uma tag sem passar nenhum texto dentro. Essa é a forma mais simples e resumida.

```JS
import React from 'react'

return(
  <>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </>
)
```

Nem sempre fazemos isso porque, com listas por exemplo, o React pede que criemos um atributo key, para diferenciar cada um dos elementos dessa lista. Então, dependendo do caso, precisamos ter algo escrito dentro do Fragment para adicionarmos o atributo a ele.
