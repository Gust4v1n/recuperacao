let saldo = -150;      // saldo negativo
let deposito = 200;
let tarifa = 5;

// 1. usar operador unario de negacao para exibicao sem alterar a variavel
console.log("Saldo em debito: " + (-saldo));

// 2. atualizar o saldo usando operadores de atribuicao composta
saldo += deposito;  // saldo = -150 + 200 = 50
saldo -= tarifa;    // saldo = 50 - 5 = 45

// 3. verificar se o saldo e positivo ou negativo
let saldoPositivo = saldo > 0;

// 4. exibicao no console
console.log("Saldo final: " + saldo);
console.log("Saldo positivo?", saldoPositivo);
