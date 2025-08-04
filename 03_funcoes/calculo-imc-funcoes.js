
function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

function classificaImc(imc) {
    if (imc <= 18.5) {
        return 'Adulto abaixo do peso ideal!';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Adulto com peso normal!';
    } else if (imc >= 25 && imc < 30) {
        return 'Adulto acima do peso ideal!';
    } else if (imc >= 30 && imc < 40) {
        return 'Adulto obeso!';
    } else {
        return 'Adulto com obesidade grave!!!!';
    }
}

function main() {
    altura = 1.75;
    peso = 68;

    const imc = calculaImc(peso, altura);
    console.log("O IMC do adulto calculado foi de: " + imc.toFixed(3) + "\n" + classificaImc(imc));
}

main();
