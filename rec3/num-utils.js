// Funcao 1: describeNumber(x)
// Descreve o tipo original, resultado de Number(x),
// se e NaN, infinito ou inteiro seguro
function describeNumber(x) {
    let tipoOriginal = typeof x;
    let convertido = Number(x);

    let relatorio = "describeNumber(" + JSON.stringify(x) + "):\n";
    relatorio += "  Tipo original: " + tipoOriginal + "\n";
    relatorio += "  Number(x): " + convertido + "\n";

    // verifica se e NaN
    let ehNaN = Number.isNaN(convertido);
    relatorio += "  E NaN? " + (ehNaN ? "Sim" : "Nao") + "\n";

    // verifica se e infinito
    let ehInfinito = !Number.isFinite(convertido) && !ehNaN;
    relatorio += "  E infinito? " + (ehInfinito ? "Sim" : "Nao") + "\n";

    // verifica se e inteiro seguro
    let ehInteiroSeguro = Number.isSafeInteger(convertido);
    relatorio += "  E inteiro seguro? " + (ehInteiroSeguro ? "Sim" : "Nao") + "\n";

    return relatorio;
}


// Funcao 2: toBigIntSafe(x)
// Tenta converter x para BigInt e retorna um objeto
// com success, value ou reason
function toBigIntSafe(x) {
    let resultado = { success: false, value: null, reason: "" };

    try {
        // tenta a conversao para BigInt
        let convertido = BigInt(x);
        resultado.success = true;
        resultado.value = convertido;
    } catch (erro) {
        // se der erro, registra o motivo
        resultado.success = false;
        resultado.reason = erro.message;
    }

    return resultado;
}


// Funcao 3: compareNumeric(a, b)
// Compara numericamente apos conversao ou retorna impossivel
function compareNumeric(a, b) {
    let numA = Number(a);
    let numB = Number(b);

    let relatorio = "compareNumeric(" + JSON.stringify(a) + ", " + JSON.stringify(b) + "):\n";
    relatorio += "  Number(a): " + numA + "\n";
    relatorio += "  Number(b): " + numB + "\n";

    // verifica se a comparacao e possivel (sem NaN)
    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        relatorio += "  Resultado: IMPOSSIVEL (um dos valores e NaN apos conversao)\n";
    } else if (numA > numB) {
        relatorio += "  Resultado: " + JSON.stringify(a) + " e MAIOR que " + JSON.stringify(b) + "\n";
    } else if (numA < numB) {
        relatorio += "  Resultado: " + JSON.stringify(a) + " e MENOR que " + JSON.stringify(b) + "\n";
    } else {
        relatorio += "  Resultado: " + JSON.stringify(a) + " e IGUAL a " + JSON.stringify(b) + " (numericamente)\n";
    }

    return relatorio;
}


// Script de demonstracao com testes variados



// teste com hexadecimal
console.log(describeNumber(0xFF));           // 255

// teste com binario
console.log(describeNumber(0b1010));         // 10

// teste com octal
console.log(describeNumber(0o17));           // 15

// teste com notacao exponencial
console.log(describeNumber(2.5e3));          // 2500

// teste com null
console.log(describeNumber(null));           // 0

// teste com undefined
console.log(describeNumber(undefined));      // NaN

// teste com string invalida
console.log(describeNumber("abc"));          // NaN

// teste com string numerica
console.log(describeNumber("42"));           // 42

// teste com Infinity
console.log(describeNumber(Infinity));       // Infinity

// teste com numero muito grande
console.log(describeNumber(Number.MAX_SAFE_INTEGER + 1));  // nao e inteiro seguro

// teste com numero negativo
console.log(describeNumber(-3.14));          // numero normal


// Parte 2: toBigIntSafe com diversos valores
console.log("\n=== Parte 2: toBigIntSafe ===\n");

let valoresBigInt = [42, "12345678901234567890", 0, -10, "abc", 3.14, true, "0xFF"];

for (let i = 0; i < valoresBigInt.length; i++) {
    let valor = valoresBigInt[i];
    let resultado = toBigIntSafe(valor);

    console.log("toBigIntSafe(" + JSON.stringify(valor) + "):");
    if (resultado.success) {
        console.log("  Sucesso! Valor: " + resultado.value.toString());
    } else {
        console.log("  Falhou! Motivo: " + resultado.reason);
    }
    console.log("");
}

// teste com BigInt muito grande
let bigIntGrande = toBigIntSafe("999999999999999999999999999999999999");
console.log("toBigIntSafe de numero gigante:");
if (bigIntGrande.success) {
    console.log("  Sucesso! Valor: " + bigIntGrande.value.toString());
}
console.log("");

// teste demonstrando perda de precisao com Number
let numGrande = 999999999999999999;
console.log("Perda de precisao com Number:");
console.log("  Valor original:         999999999999999999");
console.log("  Number armazenado:      " + numGrande);
console.log("  Diferenca (precisao perdida): valor nao e exato apos MAX_SAFE_INTEGER");
console.log("");



console.log(compareNumeric(10, "5"));             // 10 > 5
console.log(compareNumeric("0xFF", 255));          // iguais (hex)
console.log(compareNumeric(null, 0));              // iguais (null -> 0)
console.log(compareNumeric(undefined, 0));         // impossivel (undefined -> NaN)
console.log(compareNumeric("abc", 10));            // impossivel (string invalida)
console.log(compareNumeric("100", "50"));          // 100 > 50
console.log(compareNumeric(true, 1));              // iguais (true -> 1)
console.log(compareNumeric(false, ""));            // iguais (ambos -> 0)

