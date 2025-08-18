
let salarioBruto = 2000.00;
const adicionalBeneficios = 250.00;

function calculaPercentualImposto(valor, percentual) {
    return valor * (percentual / 100);
}

function percentualImpostoComBaseNoSalario(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    } else {
        return 15;
    }
}

const valorATransferir = salarioBruto - (calculaPercentualImposto(salarioBruto, percentualImpostoComBaseNoSalario(salarioBruto))) + adicionalBeneficios;

console.log('Salário do funcionário: R$ ' + salarioBruto.toFixed(2) + '\n'+ 'Beneficio do funcionário: R$ ' + adicionalBeneficios.toFixed(2));
console.log('Calculo do percentual de imposto com base no salário: ' + percentualImpostoComBaseNoSalario(salarioBruto) + '%');

console.log('Valor a transferir para o funcionário: R$ ' + valorATransferir);



// console.log(calculaPercentualImposto(salarioBruto, percentualImposto));