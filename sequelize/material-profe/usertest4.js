const { Sequelize, DataTypes, Model , Op,QueryTypes  } = require('sequelize');
const sequelize = require("./sequelize.js");
const User = require("./user.js");

(async () => 
{

    const result = await sequelize.query(
    'SELECT * FROM "User" WHERE "lastName" = ?',
    {
        replacements: ['Doe2'],
        type: QueryTypes.SELECT
    });

    console.log(result);

    const result2 = await sequelize.query(
        'SELECT * FROM "User" WHERE "lastName" = :lastName',
        {
            replacements: {lastName:'Doe'},
            type: QueryTypes.SELECT
        });
    
    console.log(result2);

    const result3 = await sequelize.query(
        'SELECT * FROM "User" WHERE "lastName" = $1',
        {
            bind:['Doe'],
            type: QueryTypes.SELECT
        });
    
    console.log(result3);

    const result4 = await sequelize.query(
        'SELECT * FROM "User" WHERE "lastName" = $lastName',
        {
            bind: {lastName:'Doe'},
            type: QueryTypes.SELECT
        });
    
    console.log(result4);

})();