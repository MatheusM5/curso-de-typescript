"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'volta';
anyEstaDeVolta = 6;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
console.log(stringTest);
let unknownValor;
unknownValor = 2;
unknownValor = '6ask';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
//stringTest2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro aq k ', 777);
