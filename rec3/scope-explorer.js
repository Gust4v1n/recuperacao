let pilhaEscopos = [];    // pilha de escopos ativos
let contadorEscopo = 0;   // contador para gerar ids unicos
let indentacao = 0;       // nivel de indentacao para visualizacao


// Funcoes auxiliares

// retorna espacos para indentacao
function indent() {
    let espacos = "";
    for (let i = 0; i < indentacao; i++) {
        espacos += "  ";
    }
    return espacos;
}

// imprime mensagem com indentacao
function log(mensagem) {
    console.log(indent() + mensagem);
}

// retorna o escopo do topo da pilha (escopo atual)
function escopoAtual() {
    return pilhaEscopos[pilhaEscopos.length - 1];
}


// Funcao: criarEscopo(nome)
// Cria um novo escopo e coloca na pilha
function criarEscopo(nome) {
    contadorEscopo++;
    let novoEscopo = {
        id: contadorEscopo,
        nome: nome,
        variaveis: {}
    };
    pilhaEscopos.push(novoEscopo);
    log("→ Criando escopo " + novoEscopo.id + " (" + nome + ")");
    indentacao++;
}


// Funcao: fecharEscopo()
// Remove o escopo do topo da pilha
function fecharEscopo() {
    let escopoFechado = pilhaEscopos.pop();
    indentacao--;

    // mostra as variaveis que estavam nesse escopo
    let vars = Object.keys(escopoFechado.variaveis);
    if (vars.length > 0) {
        log("← Fechando escopo " + escopoFechado.id + " (" + escopoFechado.nome + ") — variaveis destruidas: " + vars.join(", "));
    } else {
        log("← Fechando escopo " + escopoFechado.id + " (" + escopoFechado.nome + ") — sem variaveis");
    }
}


// Funcao: declararVariavel(nome, valor)
// Declara uma variavel no escopo atual
// Detecta shadowing se ja existe em escopo externo
function declararVariavel(nome, valor) {
    // verifica se existe em escopos externos (shadowing)
    let shadowing = false;
    for (let i = pilhaEscopos.length - 2; i >= 0; i--) {
        if (pilhaEscopos[i].variaveis[nome] !== undefined) {
            shadowing = true;
            log("Declarando \"" + nome + "\" = " + JSON.stringify(valor) + " em escopo " + escopoAtual().id + " (SHADOWING — sombreia variavel do escopo " + pilhaEscopos[i].id + ")");
            break;
        }
    }

    if (!shadowing) {
        log("Declarando \"" + nome + "\" = " + JSON.stringify(valor) + " em escopo " + escopoAtual().id);
    }

    escopoAtual().variaveis[nome] = valor;
}


// Funcao: acessarVariavel(nome)
// Busca uma variavel na cadeia de escopos (do mais interno ao mais externo)
function acessarVariavel(nome) {
    // busca do escopo mais interno para o mais externo
    for (let i = pilhaEscopos.length - 1; i >= 0; i--) {
        if (pilhaEscopos[i].variaveis[nome] !== undefined) {
            log("Acessando \"" + nome + "\" → encontrado no escopo " + pilhaEscopos[i].id + " (" + pilhaEscopos[i].nome + ") = " + JSON.stringify(pilhaEscopos[i].variaveis[nome]));
            return pilhaEscopos[i].variaveis[nome];
        }
    }
    log("Acessando \"" + nome + "\" → NAO ENCONTRADO em nenhum escopo!");
    return undefined;
}


// Funcao: escreverVariavel(nome, valor)
// Altera o valor de uma variavel existente na cadeia de escopos
function escreverVariavel(nome, valor) {
    for (let i = pilhaEscopos.length - 1; i >= 0; i--) {
        if (pilhaEscopos[i].variaveis[nome] !== undefined) {
            let valorAntigo = pilhaEscopos[i].variaveis[nome];
            pilhaEscopos[i].variaveis[nome] = valor;
            log("✏ Escrevendo \"" + nome + "\" = " + JSON.stringify(valor) + " (era " + JSON.stringify(valorAntigo) + ") no escopo " + pilhaEscopos[i].id);
            return;
        }
    }
    log("Escrevendo \"" + nome + "\" → variavel nao existe em nenhum escopo!");
}


// Funcao: mostrarEstado()
// Mostra o estado completo da pilha de escopos
function mostrarEstado() {
    log("Estado atual dos escopos:");
    for (let i = 0; i < pilhaEscopos.length; i++) {
        let escopo = pilhaEscopos[i];
        let vars = JSON.stringify(escopo.variaveis);
        log("   Escopo " + escopo.id + " (" + escopo.nome + "): " + vars);
    }
}



// let x = 10;           // escopo global
// let y = 20;           // escopo global
// {                     // bloco
//     let x = 50;       // shadowing
//     let z = 30;
//     console.log(x);   // 50 (do bloco)
//     console.log(y);   // 20 (do global)
//     {                 // bloco interno
//         let x = 100;  // shadowing novamente
//         console.log(x); // 100
//     }
//     console.log(x);   // 50 (volta ao bloco)
// }
// console.log(x);       // 10 (volta ao global)

console.log("let x = 10;");
console.log("let y = 20;");
console.log("{");
console.log("    let x = 50;");
console.log("    let z = 30;");
console.log("    console.log(x);");
console.log("    console.log(y);");
console.log("    {");
console.log("        let x = 100;");
console.log("        console.log(x);");
console.log("    }");
console.log("    console.log(x);");
console.log("}");
console.log("console.log(x);");

// escopo global
criarEscopo("global");

// let x = 10
declararVariavel("x", 10);

// let y = 20
declararVariavel("y", 20);

mostrarEstado();
console.log("");

// inicio do bloco {
criarEscopo("bloco");

// let x = 50 (shadowing)
declararVariavel("x", 50);

// let z = 30
declararVariavel("z", 30);

// console.log(x) — deve encontrar 50 no bloco
acessarVariavel("x");

// console.log(y) — deve encontrar 20 no global
acessarVariavel("y");

mostrarEstado();
console.log("");

// inicio do bloco interno {
criarEscopo("bloco interno");

// let x = 100 (shadowing novamente)
declararVariavel("x", 100);

// console.log(x) — deve encontrar 100 no bloco interno
acessarVariavel("x");

mostrarEstado();
console.log("");

// fim do bloco interno }
fecharEscopo();
console.log("");

// console.log(x) — deve encontrar 50 no bloco (voltou)
acessarVariavel("x");

// fim do bloco }
fecharEscopo();
console.log("");

// console.log(x) — deve encontrar 10 no global (voltou)
acessarVariavel("x");

mostrarEstado();
console.log("");

// fim do escopo global
fecharEscopo();

