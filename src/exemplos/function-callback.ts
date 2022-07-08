function printaValoresNumericos(num1: number, num2: number): void { // void == ausencia de retorno/ nao precisa retornar nada
    console.log(num1 + num2);
}

function somarValoresNumericosETratar(num1: number, num2: number, callback: (num: number) => number): number { // é possivel definir o tipo dos parametros e do return
    let resultado = num1 + num2;

    return callback(resultado);
}

function aoQuadrado(num: number):number {
    return num * num;
}

function dividirPorEleMesmo(num: number):number {
    return num / num;   
}

console.log(somarValoresNumericosETratar(3, 6, aoQuadrado));
console.log(somarValoresNumericosETratar(3, 6, dividirPorEleMesmo));