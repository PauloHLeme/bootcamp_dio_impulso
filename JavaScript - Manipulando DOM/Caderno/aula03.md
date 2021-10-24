# Trabalhando com estilos

element.`classList` serve para manipularmos as classes de um elemento

```HTML
<div id="meu-elemento" class="classe">
</div>
```

```JS
const meuElemento = document.getElementById("meu-elemento");

meuElemento.classList.add("novo-estilo");
// Adiciona a classe "novo-estilo"

meuElemento.classList.remove("classe");
// Remove a classe "classe"
meuElemento.classList.toggle("dark-mode");
// Adiciona a classe "dark-mode" caso ela não faça parte da lista ou remove caso ela faça.
```

## CSS

Para acessar diretamente o estilo CSS inline, podemos utilizar o element.`style`.

```JS
document.getElementsByTagName("p").style.color = "blue";
```

