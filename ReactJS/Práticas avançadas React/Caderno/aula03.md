# State

O State é uma espécie de "memória temporária" que está presente no React, e nos auxilia a trazer a interação e visualização dos nossos conteúdos dinâmicos. Ele representa o estado que o elemento está no momento em que está sendo exibido

##  useState

useState é um método presente no React que nos permite configurar o state do nosso componente.

Ele recebe como propriedades uma variável e uma função. A variável é a que vai ter um valor atribuído, e a função é o que vai alterar essa variável.

Para chamarmos o useState, podemos declarar uma constante com um array, onde o primeiro item será a variável e o segundo a função:

```JSX
const [valor, setValor] = useState(0)
```

O valor que está dentro dos parênteses na declaração do useState será o valor inicial da variável *valor*
