# Fundamentos

## Flex Container

### Display Flex


`display:flex`: Ao darmos esse comando em um elemento HTML, nós tormanos ele um Flex Container e todos os seus filhos diretos Itens Flex.

Podemos aplicar o display flex para qualquer tag do nosso HTML

Ao fazermos isso, os elementos filhos irão entrar na orientação de linha, ou seja, um ao lado do outro, e passarão a ocupar o espaço relativo ao seu conteúdo.

### Flex Direction

Como dito, por padrão os flex itens irão ser alinhados em linha. O comando `flex-direction` serve para podermos alterar isso e definir por nossa conta a direção desejada, qual será o eixo padrão do nosso container.

* row: a que vem por padrão, em linha

* row-reverse: Em linha, mas no sentido oposto, da direita pra esquerda.

* column: ordenação de cima para  baixo, em coluna única

* column-reverse: ordenação de baixo pra cima, em coluna única

Exemplo: `flex-direction:column`


