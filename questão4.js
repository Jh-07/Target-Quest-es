var faturamentos = [
    {
        estado: "SP",
        faturamento: 67836.43,
    },
    {
        estado: "RJ",
        faturamento:36678.66,
    },
    {
        estado: "MG",
        faturamento:29229.88,
    },
    {
        estado: "ES" ,
        faturamento:27165.48,
    },
    {
        estado: "Outros",
        faturamento: 19849.53,
    },
  
]
    function porcentagem(estado){
        let total=0
        for (uf of faturamentos){
            total = total + uf.faturamento
            if(uf.estado == estado)
            faturamentoLocal= uf.faturamento
        }
        console.log(faturamentoLocal*100/total+"%")
    }
    porcentagem("SP")

