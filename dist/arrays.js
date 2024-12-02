'use strict';

var alunos = [{ nome: 'Herod', nota: 4 }, { nome: 'Tilbyoes', nota: 8 }, { nome: 'Liand', nota: 10 }, { nome: 'Barabyu', nota: 9 }, { nome: 'Mikes', nota: 3 }, { nome: 'Tauste', nota: 1 }, { nome: 'Foathic', nota: 10 }, { nome: 'Lalepusi', nota: 8 }, { nome: 'Dareisi', nota: 6 }, { nome: 'Andil', nota: 5 }];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(function (aluno) {
        return aluno.nota >= 6;
    });
}

var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);