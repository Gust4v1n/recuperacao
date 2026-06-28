let estoque = 50;      // quantidade inicial
let vendidosManha = 12;
let vendidosTarde = 7;
let devolvidos = 3;
let estoqueTeste = 50
// // a)
// estoque = estoque - vendidosManha;

// // b)
// estoque = estoque - vendidosTarde + devolvidos;

// // c)
// estoque = estoque + 10 - 5;


// 1. Explique, em palavras, o que está acontecendo em cada bloco marcado com **a**, **b** e **c** (o que muda no estoque?).
// 2. Reescreva o código para usar **apenas operadores de atribuição composta** (`+=` e `=`), mantendo o mesmo comportamento.
// 3. Depois das três etapas (a, b e c), qual é o valor final da variável `estoque`?
// 4. Adicione mais uma operação: o gerente decide que o estoque deve ser **reduzido pela metade** usando apenas um operador aritmético adequado. Escreva essa linha de código e diga o valor final.


//respostas

// 1. no bloco A simplesmnete retira do estoque todos produtos vendidos naquela manha, entao ficaria 50-12, sobrou 38 produtos no estoque
// no bloco B e quase a mesma coisa do A, retira do estoque os produtos vendido naquela tarde, porem, adiciona ao estoque os produtos devolvido, entao ficaria 50-7+3
// no bloco C ele adiciona mais 5 produto ao estoque


// 2

//a)
estoque -= vendidosManha

//b)
estoque -= vendidosTarde;
estoque += devolvidos;

//c)
estoque += 10
estoque -= 5


// 3
//fica 39



// 4)
estoque /= 2;
// valor final 19.5

