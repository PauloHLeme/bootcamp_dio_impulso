# Consumindo APIs

## O que são APIs

Application Programmim Interface, ou APIs, são uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Nós as acessamos por meio de URLs, links da internet.

### JSON

JavaScript Object Notation, ou JSON, é um formato de arquivo muito utilizado na troca de informações recebidas ou enviadas por APIs.

Ele tem uma estrutura muito similar a de objetos, e carrega os dados para serem lidos entre Front e Back-end.

## Fetch

`fetch` é um método utilizado para acessar as APIs externamente. Nele colocaremos a URL da API e podemos também passar algumas opções adicionais.

```JS
fetch (url, options)
    .then(response => response.json())
    .then(json => console.log(json))
//fetch retorna uma promise, por isso precisaremos utilizar o await ao trabalhar com ele
```

Com ele podemos fazer as operações comuns de banco de dados (POST, GET, PUT, DELETE, etc)

```JS
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache'
})
    .then(response => response.json())
    .then(json => console.log(json))
//Retorna uma promisse
```

```JS
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: SON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
//Retorna uma promisse
```

