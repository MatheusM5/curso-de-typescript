//resolvido
let employee = {code: 10, name: 'string'};
employee.code = 10;
employee.name = "John";

console.log(employee.code, employee.name)

//com interface
interface Funcionario {
    code: number,
    name: string,
}
let employee2: Funcionario = {
    code: 10,
    name: "John"
}
console.log(employee2.code, employee2.name)