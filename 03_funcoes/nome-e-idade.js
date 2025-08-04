
/* 1 - Faça uma função que receba e exiba um nome;
   2 - Faça função que exiba a idade e diga se é menor ou maior de idade.*/

function exibeNome(nome) {
    console.log('Nome do usário: ' + nome);
}

function exibeIdade(idade) {
    console.log('Idade do usuário: ' + idade);
    if (idade >= 18) {
        console.log('Usuario maior de idade!');
    } else {
        console.log('Usuário menor de idade!');
    }
}

exibeNome('Alexsander');
exibeIdade(25);