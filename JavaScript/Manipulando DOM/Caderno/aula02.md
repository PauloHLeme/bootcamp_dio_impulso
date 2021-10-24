# Selecionando Elementos

* `tag`: o elemento em si, seja ele o `body` do documento, um título `h1`, ...

* `id`: um atributo de identificação única de um elemento.

* `class`: um atributo de identificação de um grupo de elementos, pode ser repetido em diferentes elementos.

## Métodos de seleção

```JS
document.getElementById('titulo');
```
Seleciona apenas um elemento, que é aquele que contém o id correspondente

```JS
document.getElementsByTagName('li');
```
Seleciona todos os elementos com essa tag dentro do documento

```JS
document.getElementsByClassName('titulo');
```
Seleciona todos os elementos com essa classe dentro do documento


```JS
document.querySelectorAll('.primeira-classe .segunda-classe');
```
Seleciona todos os elementos que atendam aos parâmetros passados dentro dos parênteses. No exemplo acima, seleciona quaisquer elementos que tenham a `primeira-classe` E a `segunda-classe`.


```JS
document.querySelectorAll('li .opcao');
```
Já neste segundo exemplo, vai selecionar todos os elementos `li` que também tenham a classe `opcao`.


## Adicionar e deletar

Método | Descrição
:---: | :---:
document.createElement(element) | Cria um novo elemento HTML
document.removeChild(element) | Remove um elemento filho
document.appendChild(element) | Adiciona um elemento filho
document.replaceC(new, old) | Substitui um elemento
