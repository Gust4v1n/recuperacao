
// Funcao 1: explainEqual(a, b)
// Retorna um texto explicando como o JS avalia a == b
function explainEqual(a, b) {
    let tipoA = typeof a;
    let tipoB = typeof b;
    let resultado = a == b;

    let explicacao = "Comparando: " + JSON.stringify(a) + " == " + JSON.stringify(b) + "\n";
    explicacao += "  Tipo de a: " + tipoA + "\n";
    explicacao += "  Tipo de b: " + tipoB + "\n";

    // explicando a logica de conversao implicita
    if (tipoA === tipoB) {
        explicacao += "  Conversao: nenhuma (mesmos tipos)\n";
    } else if (a === null || a === undefined) {
        explicacao += "  Conversao: null e undefined sao iguais entre si com ==\n";
    } else if (b === null || b === undefined) {
        explicacao += "  Conversao: null e undefined sao iguais entre si com ==\n";
    } else if (tipoA === "number" && tipoB === "string") {
        explicacao += "  Conversao: string \"" + b + "\" convertida para Number → " + Number(b) + "\n";
    } else if (tipoA === "string" && tipoB === "number") {
        explicacao += "  Conversao: string \"" + a + "\" convertida para Number → " + Number(a) + "\n";
    } else if (tipoA === "boolean") {
        explicacao += "  Conversao: boolean " + a + " convertido para Number → " + Number(a) + "\n";
    } else if (tipoB === "boolean") {
        explicacao += "  Conversao: boolean " + b + " convertido para Number → " + Number(b) + "\n";
    } else if (tipoA === "object" || tipoB === "object") {
        explicacao += "  Conversao: objeto convertido via valueOf()/toString() para primitivo\n";
    }

    explicacao += "  Resultado: " + resultado + "\n";
    return explicacao;
}


// Funcao 2: inspectValue(x)
// Retorna a versao de x convertida para String, Number, Boolean e BigInt
function inspectValue(x) {
    let tipoOriginal = typeof x;
    let relatorio = "Inspecionando valor: " + JSON.stringify(x) + "\n";
    relatorio += "  Tipo original: " + tipoOriginal + "\n";

    // conversao para String
    relatorio += "  String(x): \"" + String(x) + "\"\n";

    // conversao para Number
    let numConvertido = Number(x);
    relatorio += "  Number(x): " + numConvertido + "\n";

    // conversao para Boolean
    let boolConvertido = Boolean(x);
    relatorio += "  Boolean(x): " + boolConvertido + "\n";

    // verificacao se e BigInt
    let ehBigInt = tipoOriginal === "bigint";
    relatorio += "  E BigInt? " + (ehBigInt ? "Sim" : "Nao") + "\n";

    return relatorio;
}


// Funcao 3: compareAll(a, b)
// Mostra os resultados de ==, === e Object.is()
function compareAll(a, b) {
    let relatorio = "Comparacao completa: " + JSON.stringify(a) + " vs " + JSON.stringify(b) + "\n";

    // comparacao com == (igualdade abstrata, com coercao)
    relatorio += "  a == b:         " + (a == b) + "\n";

    // comparacao com === (igualdade estrita, sem coercao)
    relatorio += "  a === b:        " + (a === b) + "\n";

    // comparacao com Object.is (como === mas trata NaN e -0 corretamente)
    relatorio += "  Object.is(a,b): " + Object.is(a, b) + "\n";

    return relatorio;
}





// lista de 12 pares classicos de comparacao em JavaScript
let pares = [
    [0, "0"],               // numero vs string
    [0, false],             // numero vs boolean
    ["", false],            // string vazia vs boolean
    [null, undefined],      // null vs undefined
    [NaN, NaN],             // NaN nunca e igual a si mesmo
    [1, "1"],               // numero vs string
    [0, ""],                // numero vs string vazia
    [null, 0],              // null vs numero
    [undefined, 0],         // undefined vs numero
    [[], 0],                // array vazio vs numero
    ["false", false],       // string "false" vs boolean
    [" ", 0]                // string com espaco vs numero
];


// Parte 1: explainEqual para cada par
console.log("=== Parte 1: Explicacao de == (igualdade abstrata) ===\n");

for (let i = 0; i < pares.length; i++) {
    let a = pares[i][0];
    let b = pares[i][1];
    console.log("Par " + (i + 1) + ":");
    console.log(explainEqual(a, b));
}


let valoresInspecao = [0, "", false, null, undefined, NaN, "42", [], "true"];

for (let i = 0; i < valoresInspecao.length; i++) {
    console.log(inspectValue(valoresInspecao[i]));
}


// Parte 3: compareAll para pares selecionados

let paresComparacao = [
    [0, -0],                // Object.is diferencia 0 de -0
    [NaN, NaN],             // Object.is trata NaN como igual a NaN
    [1, "1"],               // == vs ===
    [null, undefined],      // null e undefined
    [false, 0],             // boolean vs numero
    ["", 0]                 // string vazia vs numero
];

for (let i = 0; i < paresComparacao.length; i++) {
    let a = paresComparacao[i][0];
    let b = paresComparacao[i][1];
    console.log("Par " + (i + 1) + ":");
    console.log(compareAll(a, b));
}

