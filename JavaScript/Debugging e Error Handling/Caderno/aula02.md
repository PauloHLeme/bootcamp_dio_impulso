# Tratando erros

## Throw

Quando fazemos nossa validação de dados para que seja inserido um valor válido em um campo e utilizamos o `return`, nós retornamos uma string contendo o texto de erro desejado.

```JS
function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}
```

Entretanto, quando falamos de tratamento de erros, podemos utilizar a palavra reservada `throw`. Isso faz com que, ao invés de ser gerado uma string com a frase de erro desejado, o código nos mostre isso como um erro realmente. Ou seja, podemos observar o retorno como um erro real, e com isso tratá-lo com os métodos de tratamento de erros.

```JS
function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}
```

## Try...catch

O método `try...catch` é uma das formas de tratarmos os erros do nosso sistema.

Ele é composto de dois blocos:

* No Try, nós vamos chamar um pedaço do nosso código que queremos que passe pelo teste de validação.

* Já no Catch, caso o retorno seja um erro, vamos dizer ao código como queremos que esse erro seja tratado, seja retornando o erro com um throw, seja retornando no nosso console, ou até mesmo chamando um tratamento específico para esse tipo de erro.

```JS
function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }catch(e){
        throw e;
    }
}

tryCatchExemplo('');
```

## Finally

Ainda dentro do Try...Catch, podemos utilizar também a palavra reservada `finally`.

O finally é, em essência, um terceiro bloco para inserirmos no método try...catch. O que estiver dentro dele será executado independente do retorno ser ou não um erro, sempre ao final da execução.

Então, se continuarmos com o nosso exemplo do palíndromo, podemos adicionar a ele um bloco de finally que vai nos retornar no console qual foi a string que utilizamos para testar o código.

```JS
function verificaPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }catch(e){
        throw e;
    }finally{
        console.log('A string enviada foi: ' + string)
    }
}

tryCatchExemplo('');
```
