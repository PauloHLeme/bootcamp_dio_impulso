function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Leme',
    idade: 29,
}

console.log(calculaIdade.call(pessoa,10))
console.log(calculaIdade.apply(pessoa,[10]));
