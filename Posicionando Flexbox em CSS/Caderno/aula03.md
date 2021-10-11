# Fundamentos

## Flex Itens

Vamos tratar agora das propriedades flex itens

### Flex Grow

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho dos seus conteúdos internos.

Não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

### Flex Basis

É a propriedade que estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

* auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item
* px, %, em, ...: são valores exatos previamente definidos
* 0: terá relação com a definição do flex-grow

### Flex Shrink

É a propriedade que estabelece a capacidade deredução ou compressão do tamanho de um item. De certa forma, é o inverso do flex-grow

### Flex

Esta propriedade é uma shorthand para: grow, shrink e basis, seguindo na ordem.

É mais comum utilizarmos essa shorthand do que as três propriedades separadas

### Order

A propriedade Order serve para ordenarmos os itens dentro do container.

### Align Self

É a propriedade que estabelece um alinhamento individual para apenas um item do container.

Para isso, o container não deve ter um align-item definido

* auto: vem por padrão, irá respeitar o align-items do container
* flex-start: início do container
* flex-end: final do container
* center: relativo ao centro do eixo
* stretch: ocupa todo o espaço relativo
* baseline: na linha base da tipografia
