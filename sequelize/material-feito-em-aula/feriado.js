const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");

class Feriado extends Model 
{
}

Feriado.init(
{
    data: 
    {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nome: 
    {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
    ,
    tipo: 
    {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    modelName:  "Feriado",
    tableName: "feriado",
    timestamps: true,
    createdAt: "criacao",
    updatedAt: 'alteracao'
});

module.exports = Feriado;