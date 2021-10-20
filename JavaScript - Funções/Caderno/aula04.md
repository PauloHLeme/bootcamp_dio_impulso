# This

A palavra `this` dentro do código referencia ao contexto no qual estamos.

No exemplo abaixo, o this se refere a pessoa, pois ele está fazendo referência a ele mesmo:

```
const pessoa = {
    firstName   : "André",
    lastName    : "Soares",
    id          : 1,
    fullName    : function(){
        return this.firstname + " " this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName():
// "André Soares"

pessoa.getId():
// 1
```

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

Contexto | Referência
:---:| :---:
Em um objeto | Próprio objeto dono do método
Sozinha | Objeto global (em navegadores, window)
Função | Objeto global
Evento | Elemento que recebeu o evento
