/*
const pessoa = {
    nome: "Mariana",
    idade: 21,
    profissao: "Desenvolvedora",
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor",
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 27,
    profissao: "desenvolvedora",
}

// criei um tipo
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface Estudante extends Pessoa {
    materias: string[];
}

const vanessa: Pessoa = {
    nome: "vanessa",
    idade: 31,
    profissao: Profissao.Atriz,
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 19,
    profissao: Profissao.Desenvolvedora,
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 26,
    materias: ["portugues", "matematica", "geografia", "historia"],
    profissao: Profissao.Atriz,
}

const monica: Estudante = {
    nome: "Monica",
    idade: 16,
    materias: ["portugues", "matematica", "geografia", "historia"],
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log(`- ${item}`)
    }
}

listar(monica.materias)
*/