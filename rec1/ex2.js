
let notaProva = 7.5;
let notaTrabalho = 8.0;
let notaProjeto = 6.5;

// 1. calculo completo da media ponderada usando apenas operadores aritmeticos
let media = (notaProva * 4 + notaTrabalho * 3 + notaProjeto * 3) / (4 + 3 + 3);

// 2. exibicao da media
console.log("A media final do aluno e: " + media);

// 3. variavel aprovado usando operadores de comparacao e logicos
let aprovado = media >= 7;

// 4. exibicao do resultado de aprovacao
console.log("Aprovado?", aprovado);
