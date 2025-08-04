
/* 1 - Refaça o exercicio de calculo de produtos utilizando funções */

function aplicaDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

let precoProduto = 125.99;
const condicaoPagamento = '4x';

if (condicaoPagamento === 'debito') {
    console.log('O preço total do produto é: R$ ' + aplicaDesconto(precoProduto, 10).toFixed(2));
} else if (condicaoPagamento === 'dinheiro' || condicaoPagamento === 'pix') {
    console.log('O preço total do produto é: R$ ' + aplicaDesconto(precoProduto, 15).toFixed(2));
} else if (condicaoPagamento === '2x') {
    precoFinal = precoProduto;
    console.log('O preço total do produto é: R$ ' + precoFinal.toFixed(2));
} else {
    console.log('O preço total do produto é: R$ ' + aplicaJuros(precoProduto, 15).toFixed(2));
}