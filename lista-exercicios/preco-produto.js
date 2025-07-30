
let precoProduto = 125.99;
const condicaoPagamento = '4x';

if (condicaoPagamento === 'debito') {
    desconto = precoProduto * (10 / 100);
    precoFinal = precoProduto - desconto;
    console.log('O preço total do produto é: R$ ' + precoFinal.toFixed(2));
} else if (condicaoPagamento === 'dinheiro' || condicaoPagamento === 'pix') {
    desconto = precoProduto * (15 / 100);
    precoFinal = precoProduto - desconto;
    console.log('O preço total do produto é: R$ ' + precoFinal.toFixed(2));
} else if (condicaoPagamento === '2x') {
    precoFinal = precoProduto;
    console.log('O preço total do produto é: R$ ' + precoFinal.toFixed(2));
} else {
    desconto = precoProduto * (10 / 100);
    precoFinal = precoProduto + desconto;
    console.log('O preço total do produto é: R$ ' + precoFinal.toFixed(2));
}