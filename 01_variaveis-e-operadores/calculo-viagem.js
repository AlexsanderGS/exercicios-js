
const precoCombustivel = 6.43;
const combustivelPorKm = 16;

let distanciaEmKm = 500;

let litrosConsumidos = distanciaEmKm / combustivelPorKm;
let consumoCombustivel = litrosConsumidos * precoCombustivel;

console.log('O custo para realizar essa viagem será de: R$ ' + consumoCombustivel.toFixed(2));