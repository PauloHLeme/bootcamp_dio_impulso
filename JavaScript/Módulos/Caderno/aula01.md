# Módulos

## Utilização

Módulos são arquivos JavaScript com a capacidade de *importar* e *exportar* informações de *outros arquivos* do mesmo tipo.

![árvore de dependências JS](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/04_import_graph.png)


## Vantagens

* Organização de código por tipos de arquivos e funcionalidades

* Compartilhamento de variáveis em escopos diferentes

* Explicita as dependências dos arquivos

* Reduzir os *imports* dentro do documento HTML

## Exportar

### Named Export

Exporta as funções que mandarmos exportar. Pode ser feito digitando export antes da função:

```JS
export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa){
     return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}
export function mostraHobby(pessoa){
     return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}
```

Ou ainda criando um bloco de export e nomear as funções:
```JS
function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
     return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}
function mostraHobby(pessoa){
     return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}
```

### Default Export

Exporta apenas uma função por arquivo, e será o retorno padrão deste arquivo.

```JS
function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
     return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}
function mostraHobby(pessoa){
     return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export{
    mostraIdade,
    mostraCidade
}

export default mostraHobby;
```

## Importar

### Named Exports

```JS
import{funcao,variavel,classe} from ',/arquivo.js'
```

### Default Exports

```JS
import valorDefault from ',/arquivo.js'
```

### Trocar nome de imports

```JS
import {arquivo as Apelido} from ',/arquivo.js'

Apelido.metodo();
```

### Importar tudo

```JS
import * as INFOS from ',/arquivos.js';

INFOS.metodoA();

console.log(INFOS.variavel);
```

## Vinculando ao HTML
```HTML
<script type="module" src="./main.js"></script>
```

## Outras curiosidades

* Módulos sempre estão em *strict mode*

* Podem ser utilizadas as estensões `.js` e `.mjs`

* Para testes locais, é necessário utilizar um servidor

* Ao importar, sempre lembre da extensão

* Ao importar, sempre utilizar `./` como ponto de partida
