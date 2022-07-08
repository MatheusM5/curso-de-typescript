let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'volta';
anyEstaDeVolta = 6;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

console.log(stringTest);

let unknownValor: unknown;
unknownValor = 2;
unknownValor = '6ask';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';

//stringTest2 = unknownValor;

if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never { // não é necessariamente um tipo void
    throw {error: erro, code: codigo}   
}

jogaErro('deu erro aq k ', 777)