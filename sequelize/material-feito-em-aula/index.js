const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const User = require("./user.js");

(async () => 
{
    User.alerta();

    await User.sync({force:true});
    //await User.drop();

    const user = User.build(
    { 
        firstName: 'Mateus', 
        lastName: 'Roveda' 
    });

    console.log(user.toJSON());

    console.log("Fullname:"+user.getFullName());

    console.log("Is jane a user="+(user instanceof User)); // true
    await user.save();

    user.firstName = "Outro nome";
    await user.save();

    await user.update({firstName:"Outro nome 2"});

    user.destroy();

})();