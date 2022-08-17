const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function main()
{
    let produtos = [
    {
        id : 1,
        nome : "Bola poderosa",
        valor : 149.90
    },
    {
        id: 2,
        nome : "Ultra mestre",
        valor : 249.90
    }];

    for (let i= 0; i< produtos.length ; i++)
    {
        let produto = produtos[i];

        let sql = `UPDATE produto SET nome= $1, valor = $2 WHERE id = $3`;
        console.log(sql);
        let resultado = await dbQuery(sql,[produto.nome, produto.valor,produto.id]);
    }

    client.end();
}

main();