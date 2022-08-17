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

        let sql = `INSERT INTO produto (nome, valor) VALUES ($1,$2)`;
        console.log(sql);
        let resultado = await dbQuery(sql,[produto.nome, produto.valor]);
    }

    client.end();
}

main();