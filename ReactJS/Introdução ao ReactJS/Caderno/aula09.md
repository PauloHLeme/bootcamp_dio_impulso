# Manipulando eventos

Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM.
Existem algumas diferenças sintáticas:



## Eventos

Eventos em React são nomeados usando camelCase ao invés de letras minúsculas

Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

```JSX
const showEvent = (e) =>{
    console.log('evento clicado')
    console.log(e)
}

const Button = <button onClick={showEvent}>Mostrar Evento</button>

const App = () => {

    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }

    return (
        <div>
            <h1>Nossa Família</h1>
            <h2>Esses somos nós:</h2>
            <input onChange={handleChange}/>
            {Button}
        </div>
    );
};
```

## Passando argumentos para manipuladores de eventos
