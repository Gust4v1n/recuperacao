let pontos = 0;

console.log("Pontos iniciais: " + pontos);

// Fase 1
pontos += 10;   // pontos = 0 + 10 = 10
pontos++;       // pontos = 10 + 1 = 11
console.log("Apos fase 1: " + pontos);  // 11

// Fase 2
pontos -= 3;    // pontos = 11 - 3 = 8
--pontos;       // pontos = 8 - 1 = 7
console.log("Apos fase 2: " + pontos);  // 7

// Fase 3
pontos *= 2;    // pontos = 7 * 2 = 14
pontos = pontos / 2 + 5;  // pontos = 14 / 2 + 5 = 7 + 5 = 12
console.log("Apos fase 3: " + pontos);  // 12

// Fase 4 (bonus)
let bonusAtivo = true;
pontos = bonusAtivo && (pontos + 20);  // bonusAtivo e true, entao retorna (12 + 20) = 32
console.log("Apos fase 4: " + pontos);  // 32

// 2. diferenca entre pontos++ e ++pontos
console.log("\n=== Diferenca entre ++ e ++ ===");
console.log("pontos++: retorna o valor ANTES de incrementar, depois incrementa");
console.log("++pontos: incrementa PRIMEIRO, depois retorna o novo valor");
console.log("neste caso, como nao usamos o valor retornado, o resultado final e igual");

// 3. por que bonusAtivo && (pontos + 20) retorna um numero
console.log("\n=== Por que && retorna numero ===");
console.log("o operador && nao retorna sempre booleano");
console.log("ele retorna o primeiro valor falsy ou o ultimo valor se todos forem truthy");
console.log("bonusAtivo e true (truthy), entao && retorna (pontos + 20) que e um numero");

// 4. modificacao para que pontos nao seja modificado se bonusAtivo for false
console.log("\n=== Versao Modificada ===");

let pontos2 = 0;

// Fase 1
pontos2 += 10;
pontos2++;
console.log("Apos fase 1: " + pontos2);  // 11

// Fase 2
pontos2 -= 3;
--pontos2;
console.log("Apos fase 2: " + pontos2);  // 7

// Fase 3
pontos2 *= 2;
pontos2 = pontos2 / 2 + 5;
console.log("Apos fase 3: " + pontos2);  // 12

// Fase 4 (bonus) - Versao modificada
let bonusAtivo2 = false;  // teste com false
if (bonusAtivo2) {
  pontos2 += 20;
}
console.log("Apos fase 4 (com bonus=false): " + pontos2);  // 12 (sem modificacao)

// versao alternativa com operador ternario
let bonusAtivo3 = true;
pontos2 = bonusAtivo3 ? pontos2 + 20 : pontos2;
console.log("Apos fase 4 (com bonus=true, versao ternaria): " + pontos2);  // 32

// versao mais simples com ||
let bonusAtivo4 = true;
pontos2 = pontos2 + (bonusAtivo4 ? 20 : 0);
console.log("Apos fase 4 (com bonus=true, versao simplificada): " + pontos2);  // 52
