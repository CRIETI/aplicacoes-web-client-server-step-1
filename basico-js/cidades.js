var estados = [];

var rs = {
    sigla: "RS",
    nome: "Rio grande do Sul",
    populacao: 109480430,
    cidades: [
        {
            codigoIbge : 4304390,
            nome: "Lajeado",
            populacao: 82343
        }
        ,
        {
            codigoIbge : 4304656,
            nome: "Estrela",
            populacao: 50409
        }
    ]
}

var sc = {
    sigla: "SC",
    nome: "Santa Catarina",
    populacao: 9989097
}

var pr = {
    sigla: "PR",
    nome: "Parana",
    populacao: 432423432
}

estados.push(rs);
estados.push(sc);
estados.push(pr);

console.log(estados);