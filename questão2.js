//Função que calcula a sequência dado o índice
function fibonacci(index){
    if (index<2){
        return index
    }
    return fibonacci(index-1) + fibonacci(index-2)  
}

//Função que recebe um número e verifica se ele faz parte da sequência
function pertenceFibonacci(num){
    let result =0
    for(i=0 ; result<=num; i++){
        result = fibonacci(i)
        if (result == num) {
            return true          
        }
    }
    return false
}

//Testando 200 números e retornando apenas os que fazem parte da sequência
for(j=0; j<=200; j++){
if(pertenceFibonacci(j) == true)
    console.log(pertenceFibonacci(j), j)    

}

//Leitura de input usando node.js
// var readline = require('readline');
// var leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// leitor.question("indique um número : ", function(answer) {
//     var resposta = answer;
//     if(pertenceFibonacci(resposta)) console.log(resposta + " faz parte da sequência de Fibonacci")
//     else console.log(resposta + " não faz parte da sequência de Fibonacci")
//     leitor.close();
// });