const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");
const User = require("./user.js");

async function main()
{
    await User.sync();
    const user = User.build({ firstName: 'Jane', lastName: 'Doe' });
    await user.save();
    await user.update({ name: "Ada" })
    await user.reload();
    await user.destroy();

    //const user = User.build({ firstName: 'Jane', lastName: 'Doe' });
    //console.log("Is jane a user="+(user instanceof User)); // true
        
    console.log(user);
    console.log(user.toJSON());
    console.log(JSON.stringify(user));
}

main();

