let idade = 30

console.log(idade)

idade = 30 + 6 
console.log("Operação de Adição " + idade)

let codigoDoProduto  = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)
/////////////////////////////////////////////////

let precoProduto =  100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

/////////////////////////////////////////////

let multiplicador = 4 
let multiplicando = 12 
let produto = multiplicador * multiplicando
console.log(" O resultado da Multiplicação é: " + produto)

// nesse exemplo nao precisa mais usar o let quando vai usar a mesma variavel pois ele ja esta declarado em cima 
multiplicador = 8
produto = multiplicador * multiplicando
console.log(" O resultado da Multiplicação é: " + produto)


///////////////////////////////////////////////////////////////////////////

let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("Operação de Divisão: " + notaDoMercado / pessoasParaDividir)


//////////////////////////////////////////////////////////////////////////////
/// calcula o resto da divisao

let  calculo = 10 % 3 
console.log("operação de Modulo: "+ calculo)


////////////////////////////////////////////////////////////////////

let contador = 1 
//  '++' incrementar
contador++
contador++

console.log(contador)
//  '--' decrementar

contador--
contador--
console.log(contador)


////////////////////////////////////////////////
let preco = 10
preco +=5 // preco = preco + 5
preco -=5 // preco = preco - 5
console.log("Resultado: " + preco)


///////////////////////////////////////////////////////////

let resultado = 2 * ((5 + 5)  - 10) 
console.log(resultado)