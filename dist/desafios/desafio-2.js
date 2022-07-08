"use strict";
//resolvido
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Pareiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz,
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz,
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};
console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos, e é ${pessoa1.profissao}`);
console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos, e é ${pessoa2.profissao}`);
console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos, e é ${pessoa3.profissao}`);
console.log(`${pessoa4.nome} tem ${pessoa4.idade} anos, e é ${pessoa4.profissao}`);
