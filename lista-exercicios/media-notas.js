
let nota1 = 6;
let nota2 = 3;
let nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno foi: " + media.toFixed(2));

if (media < 5) {
    console.log("Aluno reprovado!");
} else if (media === 5 || media <= 7) {
    console.log("Aluno em recuperação");
} else {
    console.log("Aluno aprovado!")
}