console.log("=== Analise de Conversoes Implicitas ===\n");

// 1. "10" - 3
// subtracao força conversao de string para numero
// "10" e convertido para 10, depois 10 - 3 = 7
console.log("10" - 3);  // 7
console.log("Tipo: numero. Conversao: string > numero");
console.log("Porque: operador - força conversao numerica\n");

// 2. "10" + 3
// adicao com string força concatenacao
// "10" + 3 = "103" (3 e convertido para string)
console.log("10" + 3);  // "103"
console.log("Tipo: string. Conversao: numero > string");
console.log("Porque: operador + com string prioriza concatenacao\n");

// 3. true + true
// operador + força conversao de booleano para numero
// true = 1, true = 1, entao 1 + 1 = 2
console.log(true + true);  // 2
console.log("Tipo: numero. Conversao: boolean > numero");
console.log("Porque: operador + numerico converte true para 1\n");

// 4. false - 1
// operador - força conversao de booleano para numero
// false = 0, entao 0 - 1 = -1
console.log(false - 1);  // -1
console.log("Tipo: numero. Conversao: boolean > numero");
console.log("Porque: operador - numerico converte false para 0\n");

// 5. "5" * "2"
// multiplicacao força conversao de strings para numeros
// "5" > 5, "2" > 2, entao 5 * 2 = 10
console.log("5" * "2");  // 10
console.log("Tipo: numero. Conversao: string > numero");
console.log("Porque: operador * força conversao numerica\n");

console.log("=== Criando Expressoes que Resultam em NaN ===\n");

// NaN 1: "texto" - 5
// "texto" nao pode ser convertido para numero, resulta em NaN
console.log("texto" - 5);  // NaN
console.log("Tipo: NaN. Conversao: string invalida > numero");
console.log("Porque: 'texto' nao e um numero valido\n");

// NaN 2: undefined + 10
// undefined nao tem valor numerico definido
console.log(undefined + 10);  // NaN
console.log("Tipo: NaN. Conversao: undefined > numero");
console.log("Porque: undefined nao pode ser convertido para numero\n");

console.log("=== Resumo de Conversoes Implicitas ===");
console.log("- operadores numericos (-, *, /, %) sempre convertem para numero");
console.log("- operador + prioriza concatenacao se houver string");
console.log("- true = 1, false = 0 em contexto numerico");
console.log("- strings invalidas e undefined resultam em NaN");
