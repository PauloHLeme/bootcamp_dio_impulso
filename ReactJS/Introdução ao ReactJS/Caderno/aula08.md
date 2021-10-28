# Listas e Chaves

## Renderizando múltiplos componentes

Podemos nos aproveitar do método map que um array possui no JavaScript para iterar todos os elementos de uma lista, e retornar uma impressão de vários componentes de um elemento na tela.

```JSX
const listFamilyMembers = [
    {
        id: 1,
        name: 'Paulo Leme',
    },
    {
        id: 2,
        name: 'Daniela Leme',
    },
    {
        id: 3,
        name: 'Bolota',
    },
    {
        id: 4,
        name: 'Melissa',
    },
    {
        id: 5,
        name: 'Charlotte',
    },
]
```

## Componente de lista básico

Aproveitando esse map utilizado para criarmos de forma dinâmica vários elementos, podemos apenas inserir a tag li na criação de cada elemento, e colocarmos nossa função dentro de uma tag ul. Dessa forma, ao renderizar os componentes, teremos uma lista. Simples!

```JSX
const App = () => {

    const renderFamilyMembers = (member) =>{
        return(
            <li>{member.name}</li>
        )
    }

    return (
        <div>
            <h1>Nossa Família</h1>
            <p>Esses somos nós:</p>
            <div>
                <ul>
                    {listFamilyMembers.map(renderFamilyMembers)}
                </ul>
            </div>
        </div>
    );
};
```

## Chaves

As listas funcionam normalmente apenas com essa implementação que fizemos, mas nós devemos criar chaves para os itens em React para que ele possa monitorar e alterar os elementos que estão sendo exibidos.

Para isso, podemos chamar o índice de cada elemento e atribuir seu valor para a chave, como se fosse uma propriedade da tag li:

```JSX
const App = () => {

    const renderFamilyMembers = (member,index) =>{
        return(
            <li key={index}>{member.name}</li>
        )
    }

    return (
        <div>
            <h1>Nossa Família</h1>
            <p>Esses somos nós:</p>
            <div>
                <ul>
                    {listFamilyMembers.map(renderFamilyMembers)}
                </ul>
            </div>
        </div>
    );
};
```

## Extraindo Componentes com chaves

## Chaves devem ser únicas apenas entre elementos irmãos

Todos os elementos irmãos, como por exemplo os componentes li de uma lista, devem ter chaves únicas, que não se repetem.

Colocarmos o índice do array como fizemos no ambiente educacional pode ser uma solução, mas não a mais aconselhável, pois podemos ter outras listas com outros índices e nos confundirmos e confundirmos o código também.

Para isso, podemos ao invés de colocar o índice do array, colocar o id do objeto caso ele exista, e antes disso adicionarmos um elemento identificador concatenando:

```JSX
const App = () => {

    const renderFamilyMembers = (member) =>{
        return(
            <li key={`member-${member.id}`}>{member.name}</li>
        )
    }

    return (
        <div>
            <h1>Nossa Família</h1>
            <p>Esses somos nós:</p>
            <div>
                <ul>
                    {listFamilyMembers.map(renderFamilyMembers)}
                </ul>
            </div>
        </div>
    );
};
```
