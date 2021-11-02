# Tratamento de Erros

Realizar o tratamento de erros no nosso código trás resiliência ao SoftWare e mais segurança.

## Tratamento em funções

```JS
export const soma = (a, b) => a + b;
```

```JS
export const somaSegura = (a, b) =>{
    if (typeof a === number && typeof b === number){
        return a + b;
    }else{
        return -1; //convencionando que -1 significa soma inválida
    }
}
```

## Tratamento em Forms

```JS
<form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
    <label>
        Nome:
        <input type="text" value={this.state.value} onChange={this.handleChange} required />
    </label>
    <input type="submit" value="Enviar" />
</form>
```

## Retorno de APIs

```JS
export const fetchCientistas = () => {
    fetch('url')
        .then( response => response.json())
        .then(data =>{
            setCientistas(data)
        })
        .catch(error => {
            exibirMensagem(error.code);
        })
}

function exibirMensagem(codigo){
    if (codigo === 401){
        alert('Faça login para continuar')
    }
    if (codigo === 404){
        alert('Recurso não encontrado')
    }
    if (codigo === 500){
        alert('Erro interno de servidor')
    }
}
```

## Em Componentes

Em JS usamos PropTypes

Podemos usar linguagens tipadas como TypeScript, definindo interfaces.

```JS
export const Basic = ({name}) => (
    <p>Meu nome é {name}</p>
)

Basic. propTypes = {
    name: PropTypes.string
}
```
