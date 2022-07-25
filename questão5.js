var frase = "A base do teto desaba"
function inverterFrase(string){
    let fraseInvertida = ""
for(i=string.length-1; i>=0; i--){
    fraseInvertida = fraseInvertida+ string[i]
}
 return fraseInvertida
}
console.log(inverterFrase(frase))


