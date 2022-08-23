const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");

class User extends Model 
{
    //declare id;
    static classLevelMethod() 
    {
        return 'foo';
    }
    
    instanceLevelMethod()
    {
        return 'bar';
    }
    
    getFullname() 
    {
        return [this.firstName, this.lastName].join(' ');
    }

    outraPropriedadePublica = "outro dado";
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

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
User.sync();
//User.sync({alter:true});

module.exports = User;

//const user = new User();
//user.firstName = "Jane";
//user.lastName = "Doe";
//console.log(User.classLevelMethod()); // 'foo'
//console.log(user.instanceLevelMethod()); // 'bar'
//console.log(user.getFullname()); // 'Jane Doe'




//User.drop();

//const user = new User({ id: 1 });
//user.id; // 1