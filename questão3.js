const arquivoJson = require('./dados.json')
function maiorFaturamento(tabela){
    let maxfaturamento = 0
    for(linha of tabela){
        if(linha.valor > maxfaturamento )
        maxfaturamento = linha.valor
    }
    return maxfaturamento;
}

//Essa função desconsidera os dias com valor = 0
function menorFaturamento(tabela){
    let minfaturamento
    for(linha of tabela){
        if(!minfaturamento) minfaturamento = linha.valor 
        if(linha.valor < minfaturamento && linha.valor != 0)
        minfaturamento = linha.valor
    }
    return minfaturamento;
}
//Essa função desconsidera os dias com valores iguais a 0, mas ainda divide pelo número de dias do mês
function mediaFaturamento(tabela){
    let total = 0
    let count = 0
    for(linha of tabela){
        count++
        if(linha.valor != 0){
            total = total+linha.valor
        }
    }
    return total/count
}

function retornaDiasAcimaDaMedia(tabela){
    let count = 0
    for(linha of tabela){
        if(linha.valor > mediaFaturamento(tabela))
        count++
    }
    return count
}

console.log(menorFaturamento(arquivoJson))
console.log(maiorFaturamento(arquivoJson))
console.log(retornaDiasAcimaDaMedia(arquivoJson))