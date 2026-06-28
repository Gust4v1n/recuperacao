
//  1 - Verificar se uma pessoa e maior de idade
let idade1 = 20;

if (idade1 >= 18) {
    console.log("Maior de idade");
}


//  2 - Verificar se um numero e multiplo de 3
let numero2 = 9;

if (numero2 % 3 === 0) {
    console.log(numero2 + " e multiplo de 3");
} else {
    console.log(numero2 + " nao e multiplo de 3");
}


//  3 - Identificar o maior entre dois numeros usando if...else
let numA = 15;
let numB = 22;

if (numA > numB) {
    console.log("O maior e: " + numA);
} else if (numB > numA) {
    console.log("O maior e: " + numB);
} else {
    console.log("Os dois numeros sao iguais: " + numA);
}


//  4 - Determinar se um numero e positivo, negativo ou zero com if...else if
let numero4 = -5;

if (numero4 > 0) {
    console.log(numero4 + " e positivo");
} else if (numero4 < 0) {
    console.log(numero4 + " e negativo");
} else {
    console.log("O numero e zero");
}


//  5 - Classificar nota com operador ternario
let nota = 7.5;

let resultado5 = nota >= 6 ? "Aprovado" : "Reprovado";
console.log("Nota: " + nota + " - " + resultado5);


//  6 - Simular um menu simples com switch
let opcaoMenu = 2;
// 1 = Inicio, 2 = Ajuda, 3 = Sair

switch (opcaoMenu) {
    case 1:
        console.log("Voce escolheu: Inicio");
        console.log("Bem-vindo a pagina inicial!");
        break;
    case 2:
        console.log("Voce escolheu: Ajuda");
        console.log("Entre em contato pelo email suporte@email.com");
        break;
    case 3:
        console.log("Voce escolheu: Sair");
        console.log("Ate logo!");
        break;
    default:
        console.log("Opcao invalida! Escolha 1, 2 ou 3.");
        break;
}


//  7 - Contar de 1 a 5 usando while
console.log("\n=== Contagem de 1 a 5 (while) ===");
let contador7 = 1;

while (contador7 <= 5) {
    console.log(contador7);
    contador7++;
}


//  8 - Contar de 10 a 1 usando do...while
console.log("\n=== Contagem regressiva de 10 a 1 (do...while) ===");
let contador8 = 10;

do {
    console.log(contador8);
    contador8--;
} while (contador8 >= 1);


//  9 - Imprimir numeros pares de 0 a 10 com for
console.log("\n=== Numeros pares de 0 a 10 ===");

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//  10 - Somar todos os numeros de 1 a 100 com for
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma de 1 a 100 e: " + soma);  // 5050


//  11 - Imprimir os elementos de um array com for
console.log("\n=== Frutas (for) ===");
let frutas = ["Maca", "Banana", "Laranja", "Uva", "Manga"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//  12 - Listar nomes com for...of
console.log("\n=== Nomes (for...of) ===");
let nomes = ["Ana", "Carlos", "Maria", "Pedro", "Julia"];

for (let nome of nomes) {
    console.log(nome);
}


//  13 - Exibir propriedades e valores de um objeto com for...in
console.log("\n=== Propriedades do objeto (for...in) ===");
let pessoa = {
    nome: "Leandro",
    idade: 25,
    cidade: "Sao Paulo"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}


//  14 - Pular numero especifico com continue
console.log("\n=== Numeros de 1 a 5, exceto o 3 (continue) ===");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


//  15 - Parar contagem ao encontrar um numero especifico com break
console.log("\n=== Contagem ate 10, parando no 7 (break) ===");

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Parei no " + i + "!");
        break;
    }
    console.log(i);
}



// S MEDIOS (16 a 18)



//  16 - Classificar faixa etaria
console.log("\n=== Classificacao de faixa etaria ===");
let idadeFaixa = 35;

if (idadeFaixa <= 12) {
    console.log("Idade: " + idadeFaixa + " - Crianca");
} else if (idadeFaixa <= 17) {
    console.log("Idade: " + idadeFaixa + " - Adolescente");
} else if (idadeFaixa <= 59) {
    console.log("Idade: " + idadeFaixa + " - Adulto");
} else {
    console.log("Idade: " + idadeFaixa + " - Idoso");
}


//  17 - Imprimir os nomes e tamanhos de uma lista de nomes
console.log("\n=== Nomes e quantidade de letras (for...of) ===");
let listaNomes = ["Gabriela", "Lucas", "Ana", "Fernando", "Bia"];

for (let nome of listaNomes) {
    console.log(nome + " - " + nome.length + " letras");
}


//  18 - Contar quantas propriedades um objeto tem e listar os tipos dos valores
console.log("\n=== Propriedades, tipos e contagem (for...in) ===");
let produto = {
    nome: "Notebook",
    preco: 3500.99,
    disponivel: true,
    quantidade: 10,
    marca: "Dell"
};

let contadorPropriedades = 0;

for (let chave in produto) {
    console.log(chave + ": " + produto[chave] + " (tipo: " + typeof produto[chave] + ")");
    contadorPropriedades++;
}

console.log("Total de propriedades: " + contadorPropriedades);



// S DIFICEIS (19 e 20)



//  19 - Verificar se uma palavra e um isograma (sem letras repetidas)
console.log("\n=== Verificacao de isograma (for...of + objeto) ===");
let palavra = "amor";
let contadorLetras = {};
let ehIsograma = true;

for (let letra of palavra) {
    if (contadorLetras[letra]) {
        // se a letra ja foi contada, nao e isograma
        ehIsograma = false;
        break;
    }
    contadorLetras[letra] = 1;
}

if (ehIsograma) {
    console.log('"' + palavra + '" e um isograma');
} else {
    console.log('"' + palavra + '" nao e um isograma');
}

// testando com outra palavra
let palavra2 = "arara";
let contadorLetras2 = {};
let ehIsograma2 = true;

for (let letra of palavra2) {
    if (contadorLetras2[letra]) {
        ehIsograma2 = false;
        break;
    }
    contadorLetras2[letra] = 1;
}

if (ehIsograma2) {
    console.log('"' + palavra2 + '" e um isograma');
} else {
    console.log('"' + palavra2 + '" nao e um isograma');
}


//  20 - Criar um menu com switch dentro de um while que so para com "Sair"
console.log("\n=== Menu interativo com switch + while ===");

// simulando as escolhas do usuario com um array de opcoes
// (como nao temos prompt no Node.js, usamos um array para simular)
let escolhas = ["Inicio", "Ajuda", "Sobre", "Ajuda", "Sair"];
let indice = 0;
let opcao = "";

while (opcao !== "Sair") {
    // simulando a escolha do usuario
    opcao = escolhas[indice];
    console.log("\n--- Menu ---");
    console.log("Opcoes: Inicio | Ajuda | Sobre | Sair");
    console.log("Opcao escolhida: " + opcao);

    switch (opcao) {
        case "Inicio":
            console.log("Voce esta na pagina inicial.");
            break;
        case "Ajuda":
            console.log("Secao de ajuda: entre em contato pelo email suporte@email.com");
            break;
        case "Sobre":
            console.log("Este programa foi feito para praticar fluxo de controle em JavaScript.");
            break;
        case "Sair":
            console.log("Saindo do menu... Ate logo!");
            break;
        default:
            console.log("Opcao invalida! Tente novamente.");
            break;
    }

    indice++;
}

console.log("\n=== Fim dos s ===");
