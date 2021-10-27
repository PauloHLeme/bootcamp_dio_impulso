const lista = [10, 15, 20, 25]

const lista02 = [
	{
		preco: 30,
		nome: 'maçã',
	},
	{
		preco: 15,
		nome: 'roupa',
	},
	{
		preco: 30,
		nome: 'carne',
	},
];

const saldo = 300

function calculaSaldo(saldo, lista){
    return lista.reduce(function(prev,current){
        return prev - current.preco
    },saldo)
}

console.log(calculaSaldo(saldo,lista02))
