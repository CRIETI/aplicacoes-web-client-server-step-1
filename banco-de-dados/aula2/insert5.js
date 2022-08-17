const client = require('./database.js');
//const dbQuery = require('./dbquery.js');
const dbInsert = require('./dbinsert.js');

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
        let resultado = await dbInsert("produto", produto);
        console.log(resultado);
    }

    client.end();
}

main(); 