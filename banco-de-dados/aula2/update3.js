const client = require('./database.js');
const dbQuery = require('./dbquery.js');
const dbUpdate = require('./dbupdate.js')

async function main()
{
    let produto = 
    {
        id: 2,
        nome : "Bola Ultra mestre",
        valor : 349.90
    };

    let resultado = await dbUpdate("produto", produto);

    client.end();
}

main();