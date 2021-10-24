# Eventos

São qualquer tipo de ação que o usuário faça em uma página. Uma interação.

## Tipos

Alguns dos eventos mais comuns são

* Eventos de mouse:

    * mouseover: ao passar o mouse sobre

    * mouseout: ao sair do elemento com o mouse

* Eventos de clique

    * click: Quando clica

    * dbclick: Clique duplo

* Eventos de Atualização

    * change: quando um campo mudar seu valor

    * load: quando uma página terminar de carregar

## Acionando Eventos

Para acionar um evento pelo JavaScript, nós utilizamos o parâmetro `addEventListener`. Ele vai ficar "observando" o nosso elemento, e vai ativar assim que a função for executada

```JS
const botao = document.getElementById("meuBotao")

botao.addEventListener("click" outraFuncao);
```

Podemos também realizar o acionamento pelo HTML utilizando um atributo dentro da tag a ser alterada.

```HTML
<h1 onclick="mudaTexto(this)">"Clique aqui!</h1>

<script>
    function mudaTexto(id){
        id.innerHTML = "Mudei!";
    }
</script>
```
Nesse caso, utilizamos o evento `click`, mas como estamos indicando a ação no HTML, adicionamos o prefixo `on`, criando então o `onclick` (`onmouseover`, `onload`, etc)
