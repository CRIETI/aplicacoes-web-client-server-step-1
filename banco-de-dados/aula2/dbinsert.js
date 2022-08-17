const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function dbInsert(tableName,obj)
{
    let colunas = Object.keys(obj).join(',');
    let valores = Object.values(obj) 
    let dolares = [];

    for (let y = 0; y<valores.length; y++)
    {
        dolares.push("$"+(y+1));
    }

    dolares = dolares.join(',')

    let sql = `INSERT INTO ${tableName} (${colunas}) VALUES (${dolares}) RETURNING id`;
    let resultado = await dbQuery(sql,valores);
    
    return resultado;
}

module.exports = dbInsert;