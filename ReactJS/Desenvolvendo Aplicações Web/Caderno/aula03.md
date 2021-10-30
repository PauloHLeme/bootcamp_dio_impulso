# Formulários

Formulários em React mantém um estado interno.

No HTML5, o DOM já é capaz de manter um estado interno de cada componente.

```HTML
<form>
    <label>
        Nome:
        <input type="text" name="nome" />
    </label>
    <input type="submit" value="Enviar" />
</form>
```

Em HTML, `<input>`,`<textarea>` e `<select>` tem um estado interno.

Em React, podemos controlar esse estado. Para isso, usamos state e setState.

Já que o DOM tem seu próprio estado e o React também, temos que trabalhar para unir os dois. Para isso, temos duas abordagens:

## Componente Controlado

* Tanto select, input ou textarea aceitam um atributo value

* Podemos então mudar esse valor usando o atributo onChange.

```JSX
render(){
    return(
        <form onSubmit = {this.handleSubmit}>
            <label>
                Nome:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}
```

## Componente Não-Controlado

* A tag input é read-only

* Nesse caso, criaremos uma referência que vai fazer o React ir buscar o estado dele no envio.

```JSX
render(){
    return(
        <form onSubmit = {this.handleSubmit}>
            <label>
                Upload de Arquivo:
                <input type="file" ref={thisfleInput} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}
```

> **Vale a leitura**: [Controlled and uncontrolled form inputs](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)

## Bibliotecas para formulários

* [Formik](https://formik.org/docs/overview): Recomendado pelo próprio React

* [Redux-forms](https://redux-form.com/8.3.0/)
