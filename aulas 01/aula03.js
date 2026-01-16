// estrutura de decisão 
//switch / case / break / default
// break para uma execução de um case 
// default == resposta padrao (generica)
let fruta = "morango"


switch(fruta){
    case "laranja":
        console.log("Suco de laranja")
        break
    case "banana" : 
    case "morango" : 
    console.log("Vitamina de " + fruta)
    break
    case "maçã" :
    console.log("suco de maçã")
    break
    default:
    console.log("suco ou vitamina generica")  

}