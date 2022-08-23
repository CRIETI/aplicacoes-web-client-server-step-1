const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");

class User extends Model 
{
}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  birthday: DataTypes.DATE
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  freezeTableName: true,
  tableName: 'User',
  timestamps: true, // don't forget to enable timestamps!
  createdAt: false,   // I don't want createdAt
  updatedAt: 'alteracao'
});

module.exports = User;