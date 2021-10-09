# Estrutura de dados - Aula 02

## Continuando as Estruturas

### Listas

Estruturas do tipo Lista, armazenam dados de um determinado tipo em uma ordem específica.

São parecidas com os Arrays, mas a lista possue um tamanho ajustável, e o Array é fixo.

Existem dois tipos de lista:

#### Ligadas

Na estrutura do tipo lista existem os nós onde cada um dos nós conhece o valor que está sendo armazenado em seu interior além de conhecer o elemento posterior a ele: por isso ela é chamada de *lista ligada*, pois os nós são amarrados com essa indicação de qual é o próximo nó.

#### Duplamente ligadas

A grande diferença das listas duplamente ligadas é que elas são dibidrecionais, são ligadas com a indicação do nó posterior e do anterior, permitindo a navegação reversa na lista.


### Pilhas (Stacks)

Pilha é uma estrutura de dados que serve como uma coleção de elementos, e permite o acesso a somente um item de dados armazenado.

O acesso aos itens de uma pilha é restrito - somente um item pode ser lido ou removido por vez, ao contrário de um vetor, por exemplo.

Temos dois tipos de pilhas:

#### LIFO (UEPS)

A LIFO (Last In First Out, em inglês, ou Último que Entra é o Primeiro que Sai, em português) é uma estrutura onde o último item inserido na pilha é o primeiro que sairá, ou seja, será usado.

#### FIFO (PEPS)

Já a FIFO (First In First Out, em inglês, Primeiro que Entra, Primeiro que sai) é uma estrutura onde o primeiro item inserido na pilha é o primeiro que será utilizado.

### Filas

A estrutura do tipo Fila admite remoção de elementos e inserção de novos sujeita a mesma regra da Pilha FIFO, ou seja, o primeiro objeto inserido é o primeiro objeto a ser removido
