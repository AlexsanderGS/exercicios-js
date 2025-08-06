
class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calculaImc() {
        return this.peso / (this.altura * this.altura);
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
console.log('Nome da pessoa: ' + pessoa1.nome + ' e o seu IMC é: ' + pessoa1.calculaImc().toFixed(2));