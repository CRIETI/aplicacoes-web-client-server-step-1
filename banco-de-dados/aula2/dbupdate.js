const client = require('./database.js');
const dbQuery = require('./dbquery.js');

async function dbUpdate(tableName,obj)
{
    let keys = Object.keys(obj);
    let valores = Object.values(obj) 
    let colunas = []; 

    for (let y = 0; y<keys.length; y++)
    {
        let key = keys[y];
        colunas.push(key + " = $"+(y+1));
    }

    colunas = colunas.join(', ');
    let parametroId = "$"+(valores.length+1);
    valores.push(obj.id);

    let sql = `UPDATE ${tableName} SET ${colunas} WHERE id = ${parametroId}`;
    
    return await dbQuery(sql,valores);;
}

module.exports = dbUpdate;