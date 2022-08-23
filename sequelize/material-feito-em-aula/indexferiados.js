const fetch = require("node-fetch");
const Sequelize = require('sequelize');
const sequelize = require("./sequelize.js");
const Feriado = require("./feriado.js");

async function main()
{
    await Feriado.sync();

    const ano = 2022;
    const urlApi = "https://brasilapi.com.br/api/feriados/v1/"+ano;
    const response = await fetch(urlApi);
    const result = await response.json();

    console.log(result)

    for (let i=0; i<result.length; i++)
    {
        let feriado = result[i];
        console.log(feriado)

        let meuFeriado = { 
            data : feriado.date,
            nome: feriado.name,
            tipo: feriado.type
        };

        console.log(meuFeriado);

        await Feriado.create( meuFeriado );

    }
}
main();