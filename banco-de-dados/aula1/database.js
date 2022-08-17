const pg = require('pg');

console.log("conexão");

const client = new pg.Client(
{   
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "curso"
});

client.connect();

module.exports = client;