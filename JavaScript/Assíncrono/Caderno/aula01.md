# Assincronicidade

## Definição

Algo assíncrono é aquilo que ocorre ou não se efetiva ao mesmo tempo. Não está sincronizado, ocorrendo em conjunto com outros ou outras atividades

O JavaScript é síncrono por padrão. Um proceso ocorre, recebe resposta, para depois disso outro processo acontecer e receber ou enviar resposta, e assim por diante.

Mas após atualizações, ele recebeu funções de assincronicidade, ou seja, ele é capaz de executar mais de uma atividade de uma vez, sem ter que esperar a resposta da outra. Dessa forma, executamos uma função, uma tarefa, e podemos executar outra ao mesmo tempo, sem esperar a resposta chegar da execução anterior.

## Promises

Promise é um Objeto de processamento assíncrono.

De início, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

É uma promessa, uma requisição de algo. No meio do processo entre executar e receber o resultado, podemos ter a resolução ou o rejeição.

uma promisse pode receber três estados:

* Pending: Está pendente, esperando a resposta

* Fulfilled: A resposta foi recebida, aceita e completa

* Rejected: a resposta foi recebida, porém foi rejeitada e não utilizada

## Estrutura

```JS
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=>{
        resolve(console.log("Resolvida!"))
    },2000)
});
```

## Manipulação

```JS
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=>{
        resolve(console.log("Resolvida!"))
    },2000)
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log (err.message))
```

## Async / Await

Funções assíncronas precisam dessas duas palavras chave. Utilizamos a palavra reservada `async` antes da palavra function na declaração dela.

Após isso, utilizamos o `await` na parte da função que vai esperar o returno da `promise`. Dessa forma, o bloco vai parar a execução, vai continuar seguindo o resto do código do programa, e só vai executar seu restante quando receber a resposta da promise.

```JS
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=>{
        resolve("Resolvida!")
    },3000)
})

    const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log (err.message))

    return resolved;
}
```

Vale lembrar que devemos colocar o await também ao chamarmos a função para ser executada corretamente. Senão, ela não vai nos dar o resultado, mas sim o estado da promise, se está pendente, resolvida ou rejeitada.

```JS
await resolvePromise()
```

Podemos também utilizar o try...catch com as promises. Dessa forma, podemos tratar os erros caso o resultado seja Rejected.
