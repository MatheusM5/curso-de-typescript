type input = number | string;

function somarValores(input1: input, input2: input) {
    if(typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}

console.log(somarValores(2, 7));
console.log(somarValores('Olá, ', 'tudo bem?'));
console.log(somarValores("qual sua idade? ",  25));