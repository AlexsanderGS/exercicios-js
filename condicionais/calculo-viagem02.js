
const precoEtanol = 4.13;
const precoGasolina = 6.43;
const combustivelPorKm = 16;

let tipoCombustivel = 'gasolina'
let distanciaEmKm = 500;

if (tipoCombustivel === 'etanol') {
    litrosConsumidos = distanciaEmKm / combustivelPorKm;
    consumoCombustivel = litrosConsumidos * precoEtanol;
} else {
    litrosConsumidos = distanciaEmKm / combustivelPorKm;
    consumoCombustivel = litrosConsumidos * precoGasolina;
}


console.log('O custo para realizar essa viagem será de: R$ ' + consumoCombustivel.toFixed(2));