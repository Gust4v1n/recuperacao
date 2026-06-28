let contador = 10;

// Linha A: contador++
// o valor atual e retornado (10), depois incrementado
contador++;    // contador agora e 11
console.log("Apos contador++: " + contador);  // 11

// Linha B: ++contador
// incrementa primeiro, depois retorna o novo valor
++contador;    // contador agora e 12
console.log("Apos ++contador: " + contador);  // 12

// Linha C: contador--
// o valor atual e retornado (12), depois decrementado
contador--;    // contador agora e 11
console.log("Apos contador--: " + contador);  // 11

// analise da linha complexa: resultado = contador++ + --contador
// contador esta em 11 neste ponto
// contador++ retorna 11 e depois incrementa para 12
// --contador decrementa 12 para 11 e depois retorna 11
// resultado = 11 + 11 = 22
let resultado = contador++ + --contador;
console.log("Valor de resultado: " + resultado);    // 22
console.log("Valor final de contador: " + contador); // 11

// reescrita passo a passo (sem ++ e -- na mesma linha)
console.log("\n--- simulacao passo a passo ---");
let contador2 = 10;

// Linha A
contador2 = contador2 + 1;  // 11
console.log("Apos linha A: " + contador2);

// Linha B
contador2 = contador2 + 1;  // 12
console.log("Apos linha B: " + contador2);

// Linha C
contador2 = contador2 - 1;  // 11
console.log("Apos linha C: " + contador2);

// linha complexa
let temp1 = contador2;      // 11
contador2 = contador2 + 1;  // 12
contador2 = contador2 - 1;  // 11
let resultado2_correto = temp1 + contador2;  // 11 + 11 = 22
console.log("Valor de resultado (passo a passo): " + resultado2_correto);  // 22
console.log("Valor final de contador2: " + contador2);  // 11
