# Typecheking com PropTypes

>Na medida em que sua aplicação cresce, você pode capturar muitos bugs com checagem de tipos. Em algumas aplicações, você pode usar extensões do JavaScript como Flow ou TypeScript para checar os tipos de toda a sua aplicação. Porém, mesmo se você não usá-las, React possuim algumas habilidades de checagem de tipos nativas. *React docs*

Vale lembrar que a biblioteca prop-types não vem mais nativa com a instalação padrão do react, sendo necessário fazer sua instalação através do comando `npm install --save prop-types`.

A biblioteca PropTypes é muito útil para validar tipos de dados recebidos nas nossas variáveis, nas nossas props.

Com ela, podemos por exemplo emitir um erro caso não seja inserido o tipo de dado esperado.

Para exemplificar, vamos criar uma aplicação que mostra as informações de um PetShop:

```JS
import React from "react";
import PropTypes from 'prop-types'

function PetShop (props) {

  const {dogs, cats, customers, customerName} = props
  return (
    <div>
      <div>
        <h1>Animais</h1>
        <h2>Cães: {dogs}</h2>
        <h2>Gatos: {cats}</h2>
      </div>
      <div>
        Quantidade de clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
    </div>
  )
}

PetShop.defaultProps = {
  cats:0,
  customers: []
}

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired
}

export default PetShop
```

Perceba embaixo que chamamos a função propTypes para tratar os dados de entrada que o componente PetShop recebe.

Com as propTypes, podemos pedir para o React examinar se o tipo de variável condiz com o dado recebido, além de falar se é ou não obrigatório o recebimento daquela informação.

Podemos ainda utilizar a função defaultProps para definirmos valores iniciais para cada propriedade, caso elas retornem vazias
