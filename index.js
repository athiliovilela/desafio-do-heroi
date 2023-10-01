let nomeDoPersonagem ="Hantaro"
let xpObtido = 985
let rank =""

console.log("É bom te encontrar novamente, " + nomeDoPersonagem)

if (xpObtido > 0 && xpObtido <= 1000){
    rank = "Ferro"
}
else if(xpObtido >=1001 && xpObtido <=2000 ){
    rank = "Bronze"
}
else if( xpObtido >=2001 && xpObtido <=5000){
    rank = "Prata"
}
else if(  xpObtido >=5001 && xpObtido <=7000){
    rank = "Ouro"
}
else if( xpObtido >=7001 && xpObtido <=8000){
    rank = "Platina"
}
else if( xpObtido>=8001 && xpObtido <=9000 ){
    rank = "Ascendente"
}
else if( xpObtido>=9001 && xpObtido <=10000){
    rank = "Imortal"
}
else if(xpObtido >=10001){
    rank = "Radiante"
}
console.log("O Herói de nome " + nomeDoPersonagem, "está no nível de "+ rank)