let a = 3;
let b = 8;
let c = 2;

console.log("=== Valores Iniciais ===");
console.log("a = " + a);  // 3
console.log("b = " + b);  // 8
console.log("c = " + c);  // 2

// analise passo a passo da expressao: resultado = (a++ + --b * c) % 4 + (b++ - --a);
console.log("\n=== Analise da Expressao ===");

// reescrita passo a passo:
// ordem de precedencia:
// 1. ++ e -- (incremento/decremento)
// 2. * (multiplicacao) e % (modulo)
// 3. + e - (adicao e subtracao)

// vamos simular:
let a_backup = a;
let b_backup = b;
let c_backup = c;

// Passo 1: a++
// retorna 3, depois a vira 4
let temp_a_plus = a_backup;
a_backup = a_backup + 1;
console.log("Passo 1 - a++: retorna " + temp_a_plus + ", a vira " + a_backup);

// Passo 2: --b
// b vira 7, depois retorna 7
b_backup = b_backup - 1;
let temp_b_minus = b_backup;
console.log("Passo 2 - --b: b vira " + temp_b_minus + ", retorna " + temp_b_minus);

// Passo 3: --b * c
// 7 * 2 = 14
let mult_result = temp_b_minus * c_backup;
console.log("Passo 3 - --b * c: " + temp_b_minus + " * " + c_backup + " = " + mult_result);

// Passo 4: (a++ + --b * c)
// 3 + 14 = 17
let paren_result = temp_a_plus + mult_result;
console.log("Passo 4 - (a++ + --b * c): " + temp_a_plus + " + " + mult_result + " = " + paren_result);

// Passo 5: resultado_parcial % 4
// 17 % 4 = 1
let mod_result = paren_result % 4;
console.log("Passo 5 - 17 % 4 = " + mod_result);

// Passo 6: b++
// retorna 7, depois b vira 8
let temp_b_plus = b_backup;
b_backup = b_backup + 1;
console.log("Passo 6 - b++: retorna " + temp_b_plus + ", b vira " + b_backup);

// Passo 7: --a
// a vira 3, depois retorna 3
a_backup = a_backup - 1;
let temp_a_minus = a_backup;
console.log("Passo 7 - --a: a vira " + temp_a_minus + ", retorna " + temp_a_minus);

// Passo 8: b++ - --a
// 7 - 3 = 4
let sub_result = temp_b_plus - temp_a_minus;
console.log("Passo 8 - b++ - --a: " + temp_b_plus + " - " + temp_a_minus + " = " + sub_result);

// Passo 9: (17 % 4) + (b++ - --a)
// 1 + 4 = 5
let resultado = mod_result + sub_result;
console.log("Passo 9 - resultado: " + mod_result + " + " + sub_result + " = " + resultado);

console.log("\n=== Valores Finais ===");
console.log("resultado = " + resultado);  // 5
console.log("a = " + a_backup);  // 3
console.log("b = " + b_backup);  // 8
console.log("c = " + c_backup);  // 2 (nao muda)

// agora vamos executar a expressao real
console.log("\n=== Execucao Real ===");
let a2 = 3;
let b2 = 8;
let c2 = 2;

let resultado2 = (a2++ + --b2 * c2) % 4 + (b2++ - --a2);

console.log("resultado = " + resultado2);  // 5
console.log("a = " + a2);  // 3
console.log("b = " + b2);  // 8
console.log("c = " + c2);  // 2

// reescrita sem ++ e -- diretos na expressao
console.log("\n=== Reescrita Sem ++ e -- ===");
let a3 = 3;
let b3 = 8;
let c3 = 2;

// (a++ + --b * c)
let valor_a_plus_plus = a3;  // captura o valor antigo (3)
a3 = a3 + 1;  // depois incrementa

b3 = b3 - 1;  // decrementa b primeiro
let valor_b_minus_minus = b3;  // depois usa o novo valor (7)

let parte1 = (valor_a_plus_plus + valor_b_minus_minus * c3) % 4;  // (3 + 7*2) % 4 = 17 % 4 = 1

// (b++ - --a)
let valor_b_plus_plus = b3;  // captura o valor atual (7)
b3 = b3 + 1;  // depois incrementa para 8

a3 = a3 - 1;  // decrementa a primeiro
let valor_a_menos_menos = a3;  // depois usa o novo valor (3)

let parte2 = valor_b_plus_plus - valor_a_menos_menos;  // 7 - 3 = 4

let resultado3 = parte1 + parte2;  // 1 + 4 = 5

console.log("resultado = " + resultado3);  // 5
console.log("a = " + a3);  // 3
console.log("b = " + b3);  // 8
console.log("c = " + c3);  // 2
