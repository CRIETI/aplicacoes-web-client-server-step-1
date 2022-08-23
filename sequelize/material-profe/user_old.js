const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./sequelize.js");

const User = sequelize.define('User', 
{
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
},
{
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true