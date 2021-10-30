# Stateful vs Stateless

Stateful: usa estados

Stateless: não usa estados

## Stateful

Um componente stateful possui um estado dentro do componente e um gerenciamento desses estados. Normalmente são criados utilizando classes em JS

### Estados de vida

Um componente statefull tem quatro estados diferentes que ele pode assumir durante seu Ciclo de Vida:

* Initialization: É o momento em que o componente é trazido ao código, lido e reconhecido, mas ainda não está renderizado em tela. Nesse momento, são definidas as props que ele possui e o estado inicial delas.

* Mounting: Essa é a fase de montagem do componente. Nela temos controle de alterações que podem ser feitas na hora que o componente vai ser montado, então ele será renderizado, e depois temos uma função para podermos executar comandos assim que ele tiver acabado de se montar.

* Updation: Depois de montado, um componente vai persistir renderizado enquanto o desejarmos. Nessa fase, podemos alterar props ou o seu estado. temos funções disponíveis também para realizarmos alterações antes e depois de renderizar as mudanças, bem como funções para alterações condicionais. Podemos realizar todas essas mudanças de props e estados sem ter que ficar montando e desmontando o componente, apenas o atualizando e renderizando novamente, daí o nome de Updation.

* Unmounting: Por fim, podemos encerrar o ciclo de vida do componente, o desmontando e finalizando sua renderização. Nesse momento, também temos uma função para execução de ações relacionadas a sua desmontagem.

![visualização gráfica do ciclo de vida de um componente](https://miro.medium.com/max/2000/1*fdGC22mqWBAQ7jOFPPAvIg.png)

## Stateless

Um compoente stateless não possui gerenciamento de estados no compomente. São normalmente construídos usando funções em JS.

Eles são excelentes para componentes estáticos, para exibição de itens que não tenham dinamismo

## Hooks

Nesse modelo anterior, precisávamos utilizar uma abordagem híbrida, trabalhando com classes para componentes Stateful e com funções para componentes Stateless.

Os Hooks chegaram para nos ajudar a contornar isso, e agora conseguimos utilizar funções para criar componentes do tipo Stateful, graças a um Hook chamado useState.

Esse Hook recebe um valor e uma função. O valor será o item que a função terá o poder de alterar, e dentro da declaração do useState, nós passamos como parâmetro o estado inicial do valor

```JS
const [itens, setItens] = useState(['Tomate','Alface','Melancia']);
```

## Nova nomenclatura

Dessa forma, temos agora uma atualização na forma de nomear os componentes:

* Class Components: Componentes criados com classes

* Function Components: Componentes criados com funções

E agora, ambos podem ser Stateful ou Stateless. Graças ao uso dos Hooks
