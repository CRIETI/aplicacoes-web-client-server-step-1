const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize.js");
class Mensagem extends Model { }

Mensagem.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  msg: DataTypes.STRING
},
{
  sequelize,
  modelName: 'Mensagem',
  tableName: 'mensagem',
  timestamps: true,
  createdAt: 'criacao',
  updatedAt: 'alteracao'
});
Mensagem.sync();
module.exports = Mensagem;