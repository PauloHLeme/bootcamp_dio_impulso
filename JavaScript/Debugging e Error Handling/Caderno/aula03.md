# Erros personalizados

## Objeto Error

O objeto Error é nativo do JavaScript e podemos utilizá-lo para executar propriedades e métodos específicos para os erros.

## Anatomia

```JS
new Error(message, fileName, lineNumber)
//todos os parâmetros são opcionais, embora apenas a "message" seja a mais comummente utilizado

const MeuErro = new Error('Mensagem Inválida');

//podemos também nomear o erro, para que ele apareça no console
MeuErro.name = 'InvalidMessage';

throw MeuErro;
```

