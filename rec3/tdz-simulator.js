let escopos = [];           // pilha de escopos
let contadorLinhas = 0;     // contador de linhas para o relatorio
let errosDetectados = [];   // lista de erros encontrados


// Funcoes auxiliares do simulador

// cria um novo escopo e coloca na pilha
function criarEscopoSim(nome) {
    escopos.push({
        nome: nome,
        variaveis: {}
    });
    registrar("Criando escopo: " + nome);
}

// remove o escopo do topo da pilha
function fecharEscopoSim() {
    let escopoRemovido = escopos.pop();
    registrar("Fechando escopo: " + escopoRemovido.nome);
}

// retorna o escopo atual (topo da pilha)
function escopoAtualSim() {
    return escopos[escopos.length - 1];
}

// registra uma mensagem no relatorio com numero da linha
function registrar(mensagem) {
    contadorLinhas++;
    console.log("Linha " + contadorLinhas + ": " + mensagem);
}

// registra um erro de TDZ
function registrarErro(mensagem) {
    contadorLinhas++;
    let erro = "ERRO TDZ (Linha " + contadorLinhas + "): " + mensagem;
    console.log(erro);
    errosDetectados.push(erro);
}

// busca uma variavel em todos os escopos (do mais interno ao mais externo)
function buscarVariavel(nome) {
    for (let i = escopos.length - 1; i >= 0; i--) {
        if (escopos[i].variaveis[nome] !== undefined) {
            return escopos[i].variaveis[nome];
        }
    }
    return null;
}


// Funcoes de processamento de instrucoes

// processa uma instrucao de declaracao (let/const)
function processarDeclaracao(instrucao) {
    let escopo = escopoAtualSim();
    let kind = instrucao.kind;     // "let" ou "const"
    let nome = instrucao.name;

    // a variavel entra em estado TDZ (declarada mas nao inicializada)
    escopo.variaveis[nome] = {
        kind: kind,
        estagio: "tdz",
        valor: undefined
    };

    registrar(nome + " declarado com " + kind + " (TDZ → declarado, mas nao inicializado)");
}

// processa uma instrucao de atribuicao
function processarAtribuicao(instrucao) {
    let nome = instrucao.name;
    let valor = instrucao.value;

    // busca a variavel na cadeia de escopos
    let varInfo = buscarVariavel(nome);

    if (varInfo === null) {
        registrarErro("variavel \"" + nome + "\" nao foi declarada!");
        return;
    }

    if (varInfo.kind === "const" && varInfo.estagio === "inicializada") {
        registrarErro("nao pode reatribuir variavel \"" + nome + "\" declarada com const!");
        return;
    }

    // atribui o valor e muda o estagio para inicializada
    varInfo.estagio = "inicializada";
    varInfo.valor = valor;

    registrar(nome + " = " + JSON.stringify(valor) + " (inicializada)");
}

// processa uma instrucao de leitura
function processarLeitura(instrucao) {
    let nome = instrucao.name;

    // busca a variavel na cadeia de escopos
    let varInfo = buscarVariavel(nome);

    if (varInfo === null) {
        registrarErro("variavel \"" + nome + "\" nao existe em nenhum escopo!");
        return;
    }

    if (varInfo.estagio === "tdz") {
        // variavel esta na TDZ — ERRO!
        registrarErro("variavel \"" + nome + "\" esta em TDZ! Nao pode ser acessada antes da inicializacao.");
        return;
    }

    registrar("Lendo " + nome + " → " + JSON.stringify(varInfo.valor));
}


// Funcao principal: executarPrograma(instrucoes)
// Recebe uma lista de instrucoes e simula a execucao
function executarPrograma(instrucoes) {
    // reseta o estado
    escopos = [];
    contadorLinhas = 0;
    errosDetectados = [];

    // cria o escopo global
    criarEscopoSim("global");

    for (let i = 0; i < instrucoes.length; i++) {
        let inst = instrucoes[i];

        // processa cada tipo de instrucao
        if (inst.type === "declare") {
            processarDeclaracao(inst);
        } else if (inst.type === "assign") {
            processarAtribuicao(inst);
        } else if (inst.type === "read") {
            processarLeitura(inst);
        } else if (inst.type === "block_start") {
            criarEscopoSim(inst.name || "bloco");
        } else if (inst.type === "block_end") {
            fecharEscopoSim();
        } else if (inst.type === "function_start") {
            criarEscopoSim("funcao " + (inst.name || "anonima"));
        } else if (inst.type === "function_end") {
            fecharEscopoSim();
        }

        // mostra o estado atual das variaveis apos cada passo
        mostrarEstadoSim();
    }

    // fecha o escopo global
    fecharEscopoSim();

    // relatorio final
    console.log("\n--- Relatorio Final ---");
    if (errosDetectados.length === 0) {
        console.log("Nenhum erro de TDZ detectado!");
    } else {
        console.log("Erros encontrados: " + errosDetectados.length);
        for (let i = 0; i < errosDetectados.length; i++) {
            console.log("  " + errosDetectados[i]);
        }
    }
}

// mostra o estado de todas as variaveis em todos os escopos
function mostrarEstadoSim() {
    let estado = "   Estado: ";
    let partes = [];

    for (let i = 0; i < escopos.length; i++) {
        let escopo = escopos[i];
        for (let nome in escopo.variaveis) {
            let info = escopo.variaveis[nome];
            if (info.estagio === "tdz") {
                partes.push(nome + " = TDZ");
            } else {
                partes.push(nome + " = " + JSON.stringify(info.valor));
            }
        }
    }

    if (partes.length > 0) {
        console.log(estado + "{ " + partes.join(", ") + " }");
    } else {
        console.log(estado + "{ }");
    }
}


console.log("Codigo simulado:");
console.log("  console.log(x);  // antes da declaracao");
console.log("  let x = 10;");
console.log("  console.log(x);  // depois da inicializacao");

executarPrograma([
    { type: "read", name: "x" },
    { type: "declare", kind: "let", name: "x" },
    { type: "assign", name: "x", value: 10 },
    { type: "read", name: "x" }
]);



console.log("\n\n=== Teste 2: const nao pode ser reatribuida ===");
console.log("Codigo simulado:");
console.log("  const PI;");
console.log("  PI = 3.14;");
console.log("  console.log(PI);");
console.log("  PI = 3.1415;  // tentativa de reatribuir");
console.log("");

executarPrograma([
    { type: "declare", kind: "const", name: "PI" },
    { type: "assign", name: "PI", value: 3.14 },
    { type: "read", name: "PI" },
    { type: "assign", name: "PI", value: 3.1415 }
]);



console.log("\n\n=== Teste 3: TDZ com blocos e shadowing ===");
console.log("Codigo simulado:");
console.log("  let x = 10;");
console.log("  {");
console.log("      console.log(x);  // TDZ do x interno!");
console.log("      let x = 20;");
console.log("      console.log(x);  // 20");
console.log("  }");
console.log("  console.log(x);      // 10");
console.log("");

executarPrograma([
    { type: "declare", kind: "let", name: "x" },
    { type: "assign", name: "x", value: 10 },
    { type: "read", name: "x" },
    { type: "block_start", name: "bloco if" },
    { type: "declare", kind: "let", name: "x" },
    { type: "read", name: "x" },
    { type: "assign", name: "x", value: 20 },
    { type: "read", name: "x" },
    { type: "block_end" },
    { type: "read", name: "x" }
]);



console.log("\n\n=== Teste 4: TDZ com funcao ===");
console.log("Codigo simulado:");
console.log("  function teste() {");
console.log("      console.log(y);    // variavel nao existe");
console.log("      let resultado;");
console.log("      resultado = 42;");
console.log("      console.log(resultado);");
console.log("  }");
console.log("");

executarPrograma([
    { type: "function_start", name: "teste" },
    { type: "read", name: "y" },
    { type: "declare", kind: "let", name: "resultado" },
    { type: "assign", name: "resultado", value: 42 },
    { type: "read", name: "resultado" },
    { type: "function_end" }
]);


