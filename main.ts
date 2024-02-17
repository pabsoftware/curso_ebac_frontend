function multiplicar(x: number, y: number) {
    return x * y;
}

console.log(multiplicar(10, 30));

//ou de forma mais reduzida (arrow)
const multiplicarcao = (x: number, y: number) => x * y;

console.log(multiplicarcao(10, 20));


const saudacao = (nome: string) => `Olá ${nome}`;
console.log(saudacao('Paulo Assunção'));
