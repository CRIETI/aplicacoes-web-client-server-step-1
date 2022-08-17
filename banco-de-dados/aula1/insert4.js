const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function main()
{
    let produtos = [
    {
        nome : "Bola abesurda",
        valor : 149.90
    },
    {
        nome : "Ultra Bola",
        valor : 249.90
    }];

    for (let i= 0; i< produtos.length ; i++)
    {
        let produto = produtos[i];
        let colunas = Object.keys(produto).join(',');
        let valores = Object.values(produto) 
        let dolares = [];

        for (let y = 0; y<valores.length; y++)
        {
            dolares.push("$"+(y+1));
        }

        dolares = dolares.join(',')

        let sql = `INSERT INTO produto (${colunas}) VALUES (${dolares})`;
        let resultado = await dbQuery(sql,valores);
    }

    client.end();
}

main(); 