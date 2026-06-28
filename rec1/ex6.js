console.log("=== Cenario Original ===");

let nome = "";
let apelido = "Gaudio";
let nomeExibicao = nome || apelido || "Usuario";

console.log("nomeExibicao:", nomeExibicao);  // "Gaudio"

// 1. explicacao de nomeExibicao
// nome e "" falsy
// apelido e "Gaudio" truthy
// o operador || escolheu "Gaudio" porque e o primeiro valor truthy encontrado

let idadeInformada = 0;
let idadePadrao = 18;
let idadeFinal = idadeInformada ?? idadePadrao;

console.log("idadeFinal:", idadeFinal);  // 0

// 2. diferenca entre || e ??
// || considera 0 como falsy, entao escolheria 18
// ?? considera apenas null e undefined como vazios, entao escolhe 0
// se fosse: let idadeFinal2 = idadeInformada || idadePadrao;
// o resultado seria 18 (porque 0 e falsy)

let mensagemBoasVindas = nomeExibicao && ("Bem-vindo, " + nomeExibicao + "!");

console.log("mensagemBoasVindas:", mensagemBoasVindas);  // "Bem-vindo, Gaudio!"

// 3. explicacao de mensagemBoasVindas
// nomeExibicao e "Gaudio" truthy
// como o primeiro valor e truthy, && retorna o segundo valor
// entao mensagemBoasVindas recebe "Bem-vindo, Gaudio!"

console.log("\n=== Alterando para nome ser diferente ===");

// 4. alterando valores
let nome2 = "Joao";
let apelido2 = "Silva";
let nomeExibicao2 = nome2 || apelido2 || "Usuario";

console.log("nomeExibicao2:", nomeExibicao2);  // "Joao"

let mensagemBoasVindas2 = nomeExibicao2 && ("Bem-vindo, " + nomeExibicao2 + "!");

console.log("mensagemBoasVindas2:", mensagemBoasVindas2);  // "Bem-vindo, Joao!"

// comparacao com || vs ??
console.log("\n=== Comparacao || vs ?? ===");
console.log("Com ||: idadeInformada || idadePadrao =", idadeInformada || idadePadrao);  // 18
console.log("Com ??: idadeInformada ?? idadePadrao =", idadeInformada ?? idadePadrao);  // 0
