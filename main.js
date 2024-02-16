//Exercício modulo 25

const arrayAlunos = [
    {
        "nome": "Paulo",
        "nota": 8
    },
    {
        "nome": "João",
        "nota": 10
    },
    {
        "nome": "Pedro",
        "nota": 5
    },
    {
        "nome": "José",
        "nota": 6
    },
    {
        "nome": "Tiago",
        "nota": 7
    },
    {
        "nome": "Joel",
        "nota": 4
    }

];


const notasAprovativa = arrayAlunos => {return arrayAlunos.nota >= 6}
const alunosAprovados = arrayAlunos.filter(notasAprovativa);

console.log('');
console.log('======== ALUNOS APROVADOS ========')
console.log(alunosAprovados);