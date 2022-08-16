const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function main()
{
    let produto = {
        nome : "Bola demais",
        valor : 149.90
    }

    let sql = `INSERT INTO produto (nome, valor) VALUES ($1,$2)`;
    console.log(sql);
    let resultado = await dbQuery(sql,[produto.nome, produto.valor]);

    client.end();
}

main();