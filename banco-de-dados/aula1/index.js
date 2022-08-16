const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function main()
{
    let resultado = await dbQuery("SELECT * FROM produto");

    console.table(resultado);

    let id = 1;
    let sql = "SELECT * FROM produto WHERE id = $1;"
    let resultado2 = await dbQuery(sql,[id]);

    console.table(resultado2);

    client.end();
}

main();

