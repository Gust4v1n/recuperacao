// Funcao 1: cloneShallow(obj)
// Faz uma copia rasa do objeto (apenas o primeiro nivel)
function cloneShallow(obj) {
    // cria um objeto novo e copia as propriedades do primeiro nivel
    let novoObjeto = {};

    for (let chave in obj) {
        // copia cada propriedade para o novo objeto
        novoObjeto[chave] = obj[chave];
    }

    return novoObjeto;
}


// Funcao 2: cloneDeep(obj)
// Faz uma copia profunda do objeto (todos os niveis, sem ciclos)
function cloneDeep(obj) {
    // se nao e objeto ou e null, retorna o valor direto
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // se e um array, cria um array novo
    if (Array.isArray(obj)) {
        let novoArray = [];
        for (let i = 0; i < obj.length; i++) {
            novoArray[i] = cloneDeep(obj[i]);  // clona cada elemento recursivamente
        }
        return novoArray;
    }

    // se e um objeto, cria um objeto novo
    let novoObjeto = {};
    for (let chave in obj) {
        novoObjeto[chave] = cloneDeep(obj[chave]);  // clona cada propriedade recursivamente
    }

    return novoObjeto;
}


// Funcao 3: setImmutable(obj, path, value)
// Altera uma propriedade usando path ("a.b.c" ou ["a","b","c"])
// Devolve novo objeto sem alterar o original
function setImmutable(obj, path, value) {
    // converte path de string para array se necessario
    let partes;
    if (typeof path === "string") {
        partes = path.split(".");   // "a.b.c" vira ["a", "b", "c"]
    } else {
        partes = path;              // ja e array
    }

    // se so tem uma parte, cria novo objeto com a propriedade alterada
    if (partes.length === 1) {
        let novoObjeto = cloneShallow(obj);
        novoObjeto[partes[0]] = value;
        return novoObjeto;
    }

    // se tem mais de uma parte, precisa clonar em profundidade
    let chaveAtual = partes[0];
    let restante = partes.slice(1);   // pega do segundo em diante

    let novoObjeto = cloneShallow(obj);

    // se a propriedade atual nao existe ou nao e objeto, cria um objeto vazio
    if (typeof novoObjeto[chaveAtual] !== "object" || novoObjeto[chaveAtual] === null) {
        novoObjeto[chaveAtual] = {};
    }

    // aplica recursivamente no proximo nivel
    novoObjeto[chaveAtual] = setImmutable(novoObjeto[chaveAtual], restante, value);

    return novoObjeto;
}


// Script demonstrativo

console.log("=== IMMUTABLE-LITE — Demonstracao ===\n");


// Demonstracao 1: diferenca entre mutar e criar novo objeto
console.log("=== Demo 1: Mutar vs Criar Novo Objeto ===\n");

let original = { nome: "Leandro", idade: 25, cidade: "Sao Paulo" };
console.log("Objeto original:", original);

// mutacao direta (altera o original — RUIM para imutabilidade)
let referencia = original;
referencia.nome = "Carlos";
console.log("Apos mutar via referencia:");
console.log("  referencia:", referencia);
console.log("  original:", original);
console.log("  Sao o mesmo objeto?", referencia === original);  // true — ambos foram alterados!
console.log("");

// criando novo objeto (nao altera o original — BOM para imutabilidade)
let original2 = { nome: "Leandro", idade: 25, cidade: "Sao Paulo" };
let copia = cloneShallow(original2);
copia.nome = "Carlos";
console.log("Apos alterar a copia (clone raso):");
console.log("  copia:", copia);
console.log("  original2:", original2);
console.log("  Sao o mesmo objeto?", copia === original2);  // false — original nao foi alterado!
console.log("");


// Demonstracao 2: diferenca entre clone raso e profundo
console.log("=== Demo 2: Clone Raso vs Clone Profundo ===\n");

let objetoComplexo = {
    nome: "Notebook",
    preco: 3500,
    especificacoes: {
        ram: "16GB",
        ssd: "512GB",
        processador: "Intel i7"
    },
    tags: ["eletronico", "informatica", "portatil"]
};

console.log("Objeto original:", JSON.stringify(objetoComplexo, null, 2));
console.log("");

// clone raso — objetos internos ainda sao a mesma referencia
let cloneRaso = cloneShallow(objetoComplexo);
cloneRaso.nome = "Desktop";
cloneRaso.especificacoes.ram = "32GB";  // CUIDADO: altera o original tambem!

console.log("Apos alterar clone RASO:");
console.log("  cloneRaso.nome:", cloneRaso.nome);                         // "Desktop" — ok
console.log("  objetoComplexo.nome:", objetoComplexo.nome);               // "Notebook" — ok
console.log("  cloneRaso.especificacoes.ram:", cloneRaso.especificacoes.ram);                // "32GB"
console.log("  objetoComplexo.especificacoes.ram:", objetoComplexo.especificacoes.ram);      // "32GB" — ALTEROU o original!
console.log("  Especificacoes sao o mesmo objeto?", cloneRaso.especificacoes === objetoComplexo.especificacoes);  // true
console.log("");

// resetando o valor para o teste seguinte
objetoComplexo.especificacoes.ram = "16GB";

// clone profundo — todos os niveis sao copias independentes
let cloneProfundo = cloneDeep(objetoComplexo);
cloneProfundo.nome = "Desktop";
cloneProfundo.especificacoes.ram = "64GB";   // NAO altera o original

console.log("Apos alterar clone PROFUNDO:");
console.log("  cloneProfundo.nome:", cloneProfundo.nome);                           // "Desktop"
console.log("  objetoComplexo.nome:", objetoComplexo.nome);                         // "Notebook" — ok!
console.log("  cloneProfundo.especificacoes.ram:", cloneProfundo.especificacoes.ram);                  // "64GB"
console.log("  objetoComplexo.especificacoes.ram:", objetoComplexo.especificacoes.ram);                // "16GB" — PRESERVADO!
console.log("  Especificacoes sao o mesmo objeto?", cloneProfundo.especificacoes === objetoComplexo.especificacoes);  // false
console.log("");


// Demonstracao 3: setImmutable com paths
console.log("=== Demo 3: setImmutable — Alteracao Imutavel ===\n");

let usuario = {
    nome: "Ana",
    endereco: {
        rua: "Rua das Flores",
        numero: 100,
        cidade: "Rio de Janeiro"
    },
    ativo: true
};

console.log("Usuario original:", JSON.stringify(usuario, null, 2));
console.log("");

// alterando com path como string
let usuarioAtualizado = setImmutable(usuario, "endereco.cidade", "Sao Paulo");
console.log("Apos setImmutable(usuario, 'endereco.cidade', 'Sao Paulo'):");
console.log("  Novo usuario:", JSON.stringify(usuarioAtualizado, null, 2));
console.log("  Usuario original:", JSON.stringify(usuario, null, 2));
console.log("  Original foi alterado?", usuario.endereco.cidade === "Sao Paulo" ? "SIM (ruim!)" : "NAO (perfeito!)");
console.log("");

// alterando com path como array
let usuarioAtualizado2 = setImmutable(usuario, ["nome"], "Maria");
console.log("Apos setImmutable(usuario, ['nome'], 'Maria'):");
console.log("  Novo usuario:", JSON.stringify(usuarioAtualizado2, null, 2));
console.log("  Original manteve o nome?", usuario.nome);  // "Ana"
console.log("");

// alterando path profundo
let usuarioAtualizado3 = setImmutable(usuario, "endereco.numero", 250);
console.log("Apos setImmutable(usuario, 'endereco.numero', 250):");
console.log("  Novo numero:", usuarioAtualizado3.endereco.numero);     // 250
console.log("  Original numero:", usuario.endereco.numero);             // 100
console.log("");

