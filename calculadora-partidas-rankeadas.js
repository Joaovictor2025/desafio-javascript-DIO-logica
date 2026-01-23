let vitorias = 105
let derrotas = 5

function quantidadeVitorias(vitorias,derrotas){
    let calculo = vitorias - derrotas

    if (calculo < 10){
        return "Ferro"
    } else if (calculo >= 11 && calculo <= 20){
        return "Bronze"
    } else if (calculo >= 21 && calculo <= 50){
        return "Prata"
    } else if (calculo >= 51 && calculo <= 80){
        return "Ouro"
    } else if (calculo >= 81 && calculo <= 90){
        return "Diamante"
    } else if (calculo >= 91 && calculo <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    } 
}
let nivel = quantidadeVitorias(vitorias,derrotas)
let saldoVitorias = vitorias - derrotas
console.log(`O Herói tem de saldo ${saldoVitorias} está no nivel ${nivel}`)