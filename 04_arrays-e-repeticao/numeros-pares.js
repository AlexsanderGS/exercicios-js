
// 2 - Crie um programa que seja capaz de percorrer uma lsita de números e imprima cada número Par encontrado.

let numeros = [8, 12, 16, 21, 26, 30, 32, 35, 41, 44, 51];

console.log('Numeros da lista: ' + numeros);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log('Numero PAR: ' + numero);
    }
}