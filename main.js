function Pessoa(nome, sexo, idade, cpf) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
    this.cpf = cpf;
};

//herdadondo de Pessoa
function medicos(crm, especialidade, nome, sexo, idade, cpf) {
    this.crm = crm;
    this.especialidade = especialidade;
    Pessoa.call(this, nome, sexo, idade, cpf);
}

//medico instancias de médico
const medico = new medicos(2132, 'Dermatologista', 'paulo', 'M', 41, 1345678911)
console.log(medico); 

const medico02 = new medicos(1245, 'Reumatologista', 'Pedro', 'M', 56, 2145789621)
console.log(medico02); 

//paciente herdado de pesso
function paciente(peso, altura, tiposanguineo, nome, sexo, idade, cpf ) {
    this.peso = peso;
    this.altura = altura;
    this.tiposanguineo = tiposanguineo;

    Pessoa.call(this, nome, sexo, idade, cpf);
}

//instancia de paciente
const historicoPaciente = new paciente(70, 1.65, 'O+', 'Maria', 'F', 35, 21435687911);
console.log(historicoPaciente);

const historicoPaciente2 = new paciente(65, 1.70, 'O-', 'Pedro', 'M', 26, 21435687988);
console.log(historicoPaciente2);