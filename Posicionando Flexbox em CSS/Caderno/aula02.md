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

### Flex Wrap

`flex-wrap` é a propriedade que define se os itens devem ou não quebrar a linha.

Por padrão eles não quebram linhas, compactando os itens ao máximo valor, e após isso eles começam a vazar.

* nowrap: é o padrão, não permite a quebra de linha e podemos ter vazamento

* wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado

* wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porem na direção contrária da linha, criando novas colunas acima

### Flex Flow

É um atalho para as propriedades `flex-direction` e `flex-wrap`.

Seu uso não é muito comum, pois quando mudadmos o `flex-direction` para `column`, mantemos o padrão do `flex-wrap` que é `nowrap`.

O flow é uma *shorthand*, ou seja, uma estrutura curta, um atalho, para alterarmos duas ou mais propriedades de um elemento.

### Justify Content

Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

Caso seus itens estejam ocumando 100% do container, ela não terá aplicação.

* `flex-start`: início do container
* `flex-end`: final do container
* `space-between`: cria um espaçamento igual entre os elementos, com os itens das pontas no extremo do container
* `space-around`: os espaçamentos do meio são duas vezes maiores que o inicial e o final

Vale lembrar que existem outras propriedadees aceitas para o justify-content, mas essas são as mais utilizadas no contexto do Flex Box.

### Align Itens

Trada do alinhamento dos flex itens de acordo com o eixo do container.

O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Permite o alinhamento central no eixo vertical.

#### Tipos de alinhamentos

* `center:` alinhamento dos itens ao centro
* `stretch`: padrão, e os flex itens cresçam igualmente
* `flex-start`: alinhamento dos itens no início
* `flex-end`: alinhamento dos itens no final
* `baseline`: alinhamento de acordo com a linha base da tipografia dos itens


### Align Content

É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical dele.

Para isso, o container deve:

* Utilizar quebra de linhas
* A altura do container deve ser maior que a soma da altura das linhas

#### Tipos de alinhamento

* `center:` alinhamento dos itens ao centro
* `stretch:` padrão, crescendo igualmente
* `flex-start`: alinhamento dos itens no início
* `flex-end`: alinhamento dos itens ao final
* `space-between`: cria um espaçamento por igual entre os elementos
* `space-around`:os espaçamentos do meio são duas vezes maiores que os dos extremos
