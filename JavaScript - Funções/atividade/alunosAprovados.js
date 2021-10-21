function alunosAprovados(array, media){
    if(!array) return "insira os dados dos alunos";

    let aprovados = [];


    for (let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

const falso = false;

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Joaquim',
		nota: 7,
		turma: '2C',
	},
	{
		nome: 'Paulo',
		nota: 10,
		turma: '2C',
	},
];

const corte = 7;

console.log(alunosAprovados(falso,corte));
console.log(alunosAprovados(alunos,corte));
