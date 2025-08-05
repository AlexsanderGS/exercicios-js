
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    detalhes() {
    console.log(`Marca: ${this.marca}, Cor: ${this.cor}, Gasto Médio por KM: ${this.gastoMedioPorKm}`);
  }

  calculaGastoPercurso(qtdKm, precoCombustivel) {
    return (qtdKm * this.gastoMedioPorKm) * precoCombustivel;
  }
}

 const carro1 = new Carro('FIAT', 'AZUL', 1/13);
 carro1.detalhes();
 console.log('Gasto da viagem de 70Km em R$: ' + carro1.calculaGastoPercurso(70, 5).toFixed(2));