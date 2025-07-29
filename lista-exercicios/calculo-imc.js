
let altura = 1.75;
let peso = 68;

const imc = peso / (altura * altura);
console.log("O IMC do adulto calculado foi de: " + imc.toFixed(3))

if (imc <= 18.5) {
    console.log('Adulto abaixo do peso ideal!');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Adulto com peso normal!');
} else if (imc >= 25 && imc < 30) {
    console.log('Adulto acima do peso ideal!');
} else if (imc >= 30 && imc < 40) {
    console.log('Adulto obeso!');
} else {
    console.log('Adulto com obesidade grave!!!!');
}