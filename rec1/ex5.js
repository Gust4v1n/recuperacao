let usuario = "leandro";
let senha = "1234";
let usuarioDigitado = "leandro";
let senhaDigitada = "";
let bloqueado = false;

// 1. loginValido sera true se usuario for igual E senha nao for vazia
let loginValido = usuarioDigitado === usuario && senhaDigitada !== "";

console.log("Login valido?", loginValido);  // false (porque senhaDigitada esta vazia)

// 2. podeAcessar sera false se bloqueado for true, ou true se nao estiver bloqueado e login for valido
let podeAcessar = !bloqueado && loginValido;

console.log("Pode acessar?", podeAcessar);  // false

// 3 e 4. explicacao sobre falsy e uso com ||
// uma string vazia ("") e considerada falsy em javascript porque nao tem conteudo
// quando você usa ||, ela retorna o primeiro valor truthy ou o ultimo valor se todos forem falsy

let mensagemErro = senhaDigitada || "Senha nao informada.";
console.log("Mensagem de erro:", mensagemErro);  // "Senha nao informada."

// explicacao:
// senhaDigitada e "" falsy
// entao a expressao || avalia o proximo valor
// que e "Senha nao informada."
// portanto, mensagemErro recebe "Senha nao informada."

console.log("\n--- Teste com valores diferentes ---");

// se senhaDigitada tiver valor
let senhaDigitada2 = "1234";
let mensagemErro2 = senhaDigitada2 || "Senha nao informada.";
console.log("Mensagem de erro (com senha):", mensagemErro2);  // "1234"

// se tentar acessar com senha valida
let usuarioDigitado2 = "leandro";
let senhaDigitada3 = "1234";
let loginValido2 = usuarioDigitado2 === usuario && senhaDigitada3 !== "";
let podeAcessar2 = !bloqueado && loginValido2;
console.log("Login valido com dados corretos?", loginValido2);  // true
console.log("Pode acessar com dados corretos?", podeAcessar2);  // true
