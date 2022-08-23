const Sequelize = require("sequelize");

const sequelize = new Sequelize("curso","postgres","postgres",
{
    dialect: "postgres",
    host: "localhost",
    port: 5432
});

async function testeDatabase()
{
    try 
    {
        await sequelize.authenticate();
        console.log("Conectado no banco!");    
    } 
    catch (error)
    {
        console.log("Problemas ao conectar no banco de dado! " +error);
    }
    
}

testeDatabase();

module.exports = sequelize;