let precoBase = 100;
let descontoPercentual = 10;  // em %
let taxaServico = 5;          // em %

// reescrita com variaveis intermediarias
let valorDesconto = precoBase * descontoPercentual / 100;
console.log("Valor do desconto:", valorDesconto);  // 10

let valorTaxa = precoBase * taxaServico / 100;
console.log("Valor da taxa:", valorTaxa);  // 5

let totalComAjustes = precoBase - valorDesconto + valorTaxa;
console.log("Total com ajustes:", totalComAjustes);  // 100 - 10 + 5 = 95

// agora a parte logica
let negacaoFalse = !false;  // true
console.log("!false =", negacaoFalse);

let comparacao = totalComAjustes > 100;  // 95 > 100 = false
console.log("totalComAjustes > 100 =", comparacao);

let precoFinal = comparacao && negacaoFalse;  // false && true = false
console.log("Valor final de precoFinal:", precoFinal);  // false

// explicacao da precedencia de operadores (do mais para o menos precedente):
// 1. * (multiplicacao) e / (divisao) - executam primeiro
// 2. + (adicao) e - (subtracao) - executam depois
// 3. > (comparacao maior que) - executam depois
// 4. && (AND logico) - executam depois
// 5. ! (NOT logico) - executam primeiro (na sub-expressao)

console.log("\n=== Analise Passo a Passo ===");
console.log("Passo 1: calcular valorDesconto = 100 * 10 / 100 = 10");
console.log("Passo 2: calcular valorTaxa = 100 * 5 / 100 = 5");
console.log("Passo 3: calcular totalComAjustes = 100 - 10 + 5 = 95");
console.log("Passo 4: avaliar 95 > 100 = false");
console.log("Passo 5: avaliar !false = true");
console.log("Passo 6: avaliar false && true = false");
console.log("Resultado final: precoFinal = false");

// se tivessemos feito tudo em uma linha (versao original):
let precoFinalOriginal = precoBase - precoBase * descontoPercentual / 100 + precoBase * taxaServico / 100 > 100 && !false;
console.log("\nPreco final (versao original em uma linha):", precoFinalOriginal);
