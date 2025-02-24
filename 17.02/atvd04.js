// dado o seguinte array, crie um programa utilizando o laço forEach que some as notas de todos os alunos:
// const alunos = [
// { aluno: 'joao', nota: 10 },
// { aluno: 'maria', nota: 6 },
// { aluno: 'mateus', nota: 8 },
// { aluno: 'diego', nota: 7 },]

const alunos = [
    { aluno: 'João', nota: 10 },
    { aluno: 'Maria', nota: 4 },
    { aluno: 'Mateus', nota: 8 },
    { aluno: 'Diego', nota: 7 },
];

let totalNotas = 0;

alunos.forEach((aluno) => {
    totalNotas += aluno.nota;
})
console.log("O total das notas é: " + totalNotas);