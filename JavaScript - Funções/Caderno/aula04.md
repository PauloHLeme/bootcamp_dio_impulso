# This

A palavra `this` dentro do código referencia ao contexto no qual estamos.

>OBS: Quando utilizamos uma função dentro de um objeto, chamamos ela de método

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
Em um objeto (método) | Próprio objeto dono do método
Sozinha | Objeto global (em navegadores, é o `window`)
Função | Objeto global
Evento | Elemento que recebeu o evento


### Fora de função

```
console.log(this);
```

Nesse caso, o this é referente a um objeto vazio, pois não tem ninguém pra se referir, então ele vai retornar um elemento vazio.

### No navegador

Digitando `this` no console do navegador, teremos como retorno o *window*, que é o elemento pai do navegador, a janela onde visualizamos tudo.

### Dentro de uma função

```
(function (){
    console.log(this);
})();

//saída:
<ref *1> Object [global]{
    //elementos do objeto global
}
```

Nesse caso, o elemento ao que o this se refere é o objeto nativo que existe dentro de uma função.

### Dentro de um objeto (método)

como no exemplo do início, se refere ao objeto.

### Em um evento HTML

```
<body>
    <button
        id="my-btn"
        onclick="console.log(this)
        >click me!</button>
</body>
```

Dentro de um evento, como no caso acima, ele vai dar como retorno o botão, pois o this está se referindo ao elemento em que ele está.

## Manipulando o valor de this

### Call

O método `call` serve para chamarmos um objeto e dizermos para a função quem queremos a que ela se refira.

```
const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log (this.nome);
};

getSomething.call(pessoa);
```

Podemos também utilizar o call para combinarmos o envio de um objeto mais argumentos:

```
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
```

### Apply

```
const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Godi",
};

function getSomething() {
    console.log(this.nome)
};

getSomething.apply(pessoa);
```

Como podemos ver, tanto o call quanto o apply são bem similares, mas o apply vai passar os dados de novos argumentos na forma de um array, e não apenas dentro de vírgulas.

```
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]);
```

### Bind

Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

```
const retornaNomes = function (){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
//Bruno
```

No caso abaixo, a variável bruno vai receber a função retornaNomes. o bind *liga* a variável a uma função. Dessa forma, ao chamarmos a variável, a chamamos como uma função, com os parênteses na frente.
