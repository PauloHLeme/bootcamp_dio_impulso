# Rest HTTP com React

APIs HTTP Servem para conectar a um ou mais servidores HTTP.

Temos os métodos GET, POST DELETE e PUT dentro do protocolo HTTP para realizar as requisições e alterações de dados.

## Fetch API

É uma biblioteca nativa dos Browsers.

É um projeto relativamente recente.

Suporte a Serviçe Workers

Não envia nem recebe cookies (precisa definir a ipção *credentials*)

Não rejeita o statos do erro HTTP

## Axios

Biblioteca de HTTP API

Cross-Browser

Pode monitorar o progresso de um request

Melhor tratamento de erros

Melhor teste

`npm add axios`

### GET

```JS
import axios from 'axios';

axios.get ('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
    .then(data => {
        alert(`Conheca algumas cientistas brasileira: ${data}`)
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`)
    });
```

### POST (adicionando)

```JS
import axios from 'axios';

axios.post ('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras',{
    nome: 'Heleieth Saffioti',
    Area: 'letras'
})
    .then(data => {
        alert(`Conheca algumas cientistas brasileira: ${data}`)
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`)
    });
```

### DELETE

```JS
import axios from 'axios';

axios.delete ('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/4')
    .then(data => {
        alert(`Conheca algumas cientistas brasileira: ${data}`)
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`)
    });
```

### PUT (alterar dados)

```JS
import axios from 'axios';

axios.post ('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/3',{
    nome: 'Sonia Guimarães',
    Area: 'física'
})
    .then(data => {
        alert(`Conheca algumas cientistas brasileira: ${data}`)
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`)
    });
```
