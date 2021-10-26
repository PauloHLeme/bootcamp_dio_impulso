# Orientação a Objetos em JavaScript - OOJS

## Protótipos

Todos os objetos JS herdam propriedades e métodos de um prototype.

O objeto Object.prototype está no topo desta cadeia.

Todos as variáveis de tipos não primitivos possuem a propriedade `_proto`, que tem uma série de métodos e propriedades por padrão.

## Classes

Classes não existem nativamente no JS. Ela é feita como uma *Syntatic sugar*, isso é, uma sintaxe criada para facilitar a escrita.

```JS
class Meal{
    constructor (food){
        this.food = food
    }

    eat() {
        return: 'delicia'
    }
}
```

Dessa forma, o que acontece por baixo dos panos é: as classes do JS são objetos criados a partir dessa sintaxe. E a herança é feita através dos protótipos desses objetos.
