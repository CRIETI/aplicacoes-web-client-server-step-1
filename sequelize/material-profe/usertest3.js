const { Sequelize, DataTypes, Model , Op,QueryTypes  } = require('sequelize');
const sequelize = require("./sequelize.js");
const User = require("./user.js");

(async () => 
{
    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);
    
    /*const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));

    const users2 = await User.findAll({
        attributes: ['firstName']
      });

    console.log("All users:", JSON.stringify(users2, null, 2));*/

    /*const users3 = await User.findAll({
        where: {
          id: jane.id
        }
      });*/

    /*const users3 = await User.findOne({
        where: {
            id: 
            {
                [Op.eq]: jane.id
            }
        }
        ,
        order: ['alteracao'],
        offset: null,
        limit: 1
      });
      
    console.log(JSON.stringify(users3, null, 2));*/

    // Change everyone without a last name to "Doe"
    /*await User.update({ lastName: "Doe" }, 
    {
        where: {
        lastName: null
        }
    });*/

    /*await User.destroy( 
    {
        where: {
        lastName: "Doe"
        }
    });*/

    /*const [user, created] = await User.findOrCreate({
        where: { firstName: 'sdepold' },
        defaults: {
          lastName: 'Technical Lead JavaScript'
        }
      });*/

    //const results = await sequelize.query('SELECT * FROM "User"', { type: QueryTypes.SELECT });
    const results = await sequelize.query('SELECT * FROM "User"', 
    {
        model: User,
        mapToModel: true, // pass true here if you have any mapped fields
        type: QueryTypes.SELECT 
    });
    
    console.log(results[0]);
    

})();